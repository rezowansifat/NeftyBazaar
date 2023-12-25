"use client";

import React, { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";

import axios from "axios";

//INTERNAL IMPORT
import { NeftyBazaarAddress, NeftyBazaarABI } from "./constants";

//FETCH CONTRACT
const neftyBazaarFetchContract = (signerOrProvider) =>
  new ethers.Contract(NeftyBazaarAddress, NeftyBazaarABI, signerOrProvider);

//CONNECTING WTIH THE  CONTRACT
const connectingWithContract = async () => {
  try {
    const web3Modal = new Web3Modal({});
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);

    const signer = provider.getSigner();

    const contract = neftyBazaarFetchContract(signer);

    return contract;
  } catch (error) {
    console.log(
      `Somthing went wrong whele connecting with the contract: ${error}`
    );
  }
};

export const NeftyBazaarContext = React.createContext();

//USESTATES
const [currentAccount, setCurrentAccount] = useState("");

//CHECK WALLET CONNECTED OR NOT
const checkIFWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("INSTALL META MASK");

    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    if (accounts.lengts) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log("NO Account Found");
    }
  } catch (error) {
    console.log(`Somthing went wrong whele connecting account ${error}`);
  }
};

//Connect Wallet On Click
const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install Wallet");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccount",
    });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  } catch (error) {
    console.log(`Somthing went wrong whele connecting wallet ${error}`);
  }
};

export const NeftyBazaarProvider = ({ children }) => {
  return (
    <NeftyBazaarContext.Provider
      value={{ checkIFWalletConnected, connectWallet }}
    >
      {children}
    </NeftyBazaarContext.Provider>
  );
};

export default NeftyBazaarContext;
