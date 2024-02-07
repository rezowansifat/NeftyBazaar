"use client";

import React, { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers, formatUnits } from "ethers";
import { useRouter } from "next/navigation";
import axios from "axios";

//INTERNAL IMPORT
import { NeftyBazaarAddress, NeftyBazaarABI } from "./constants";

//const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

//FETCH CONTRACT
const neftyBazaarFetchContract = (signerOrProvider) =>
  new ethers.Contract(NeftyBazaarAddress, NeftyBazaarABI, signerOrProvider);

//CONNECTING WTIH THE  CONTRACT
const connectingWithContract = async () => {
  try {
    const web3Modal = new Web3Modal({});
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);

    const signer = await provider.getSigner();

    const contract = neftyBazaarFetchContract(signer);

    return contract;
  } catch (error) {
    setOpenError(true);
    setError("Somthing went wrong whele connecting with the contract");
  }
};

export const NeftyBazaarContext = React.createContext();

export const NeftyBazaarProvider = ({ children }) => {
  //USESTATES
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);

  const [currentAccount, setCurrentAccount] = useState("");

  const router = useRouter();

  //CHECK WALLET CONNECTED OR NOT
  const checkIFWalletConnected = async () => {
    try {
      if (!window.ethereum) return;
      setOpenError(true), setError("INSTALL META MASK");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      // console.log(accounts);

      if (accounts.length) {
        // console.log(accounts[0]);
        setCurrentAccount(accounts[0]);
      } else {
        setOpenError(true);
        setError("NO Account Found");
      }
    } catch (error) {
      setOpenError(true);
      setError(`Somthing went wrong whele connecting account`);
    }
  };

  //Connect Wallet On Click
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install Wallet");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

      //window.location.reload();
    } catch (error) {
      setOpenError(true);
      setError(`Somthing went wrong whele connecting wallet`);
    }
  };

  //Upload to IPFS
  const uploadToIPFS = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `d2ce48d500b4d5ce5480`,
            pinata_secret_api_key: `b7fc9b37f7eb63a89c4cbd036fbf4f2239d5734463b71f3ee065fcf9ac467e36`,
            "Content-Type": "multipart/form-data",
          },
        });

        const imgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        return imgHash;
      } catch (error) {
        setOpenError(true);
        setError(`Error Uploading to IPFS`);
      }
    } else {
      setOpenError(true);
      setError(`File Not Found To upload`);
    }
  };

  //Create NFT
  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image)
      return setOpenError(true), setError("Data Is Missing");

    const data = JSON.stringify({ name, description, image });

    try {
      const response = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",

        data: data,
        headers: {
          pinata_api_key: `d2ce48d500b4d5ce5480`,
          pinata_secret_api_key: `b7fc9b37f7eb63a89c4cbd036fbf4f2239d5734463b71f3ee065fcf9ac467e36`,
          accept: " application/json",
          "content-type": "application/json",
        },
      });

      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

      await createSale(url, price);
      // router.push("/search");
    } catch (error) {
      setOpenError(true);
      setError(`Error While Create Nft`);
    }
  };

  //Create Sale
  const createSale = async (url, fromInputPrice, isReselling, id) => {
    try {
      const price = ethers.parseUnits(fromInputPrice, "ether");

      const contract = await connectingWithContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (error) {
      setOpenError(true);
      setError(`Error While Creating Sale `);
    }
  };

  //Fetch All Nfts
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.JsonRpcProvider();
      const contract = neftyBazaarFetchContract(provider);
      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);

            const price = formatUnits(unformattedPrice.toString(), "ether");

            return {
              price,
              tokenId: parseInt(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      setOpenError(true);
      setError(`Error While Fteching NFTs`);
    }
  };

  useEffect(() => {
    checkIFWalletConnected();
    fetchNFTs();
  }, []);

  //Fetching My NFts or Listed Nfts
  const fetchMyNFT = async (type) => {
    try {
      const contract = await connectingWithContract();

      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFTs();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);

            const price = formatUnits(unformattedPrice.toString(), "ether");

            return {
              price,
              tokenId: parseInt(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      setOpenError(true);
      setError(`Error While Fteching Listed NFTs`);
    }
  };

  //Buy NFts
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithContract();

      const price = ethers.parseUnits(nft.price.toString(), "ether");

      const transection = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transection.wait();

      router.push("/author");
    } catch (error) {
      setOpenError(true);
      setError(`Error While Buying NFT`);
    }
  };

  return (
    <NeftyBazaarContext.Provider
      value={{
        connectWallet,
        uploadToIPFS,
        createNFT,
        createSale,
        fetchNFTs,
        fetchMyNFT,
        buyNFT,
        currentAccount,
        checkIFWalletConnected,
        currentAccount,
        setOpenError,
        openError,
        error,
      }}
    >
      {children}
    </NeftyBazaarContext.Provider>
  );
};

export default NeftyBazaarContext;
