"use client";

import FeaturedItem from "@/components/FeaturedItems/FeaturedItem";
import { HeroSection } from "@/components/componentsindex";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import NeftyBazaarContext from "../../Context/NeftyBazaarContext";
import Loader from "@/components/Loader/Loader";
import { getTopCreators } from "../../topCreators/topCreators";

const Home = () => {
  const { fetchNFTs, checkIFWalletConnected, currentAccount } =
    useContext(NeftyBazaarContext);

  const [nfts, setNfts] = useState([]);
  // const [nftsCopy, setNftsCopy] = useState([]);

  //Top Creator List
  const TopCreators = getTopCreators(nfts);

  console.log(TopCreators);

  useEffect(() => {
    checkIFWalletConnected();
  }, []);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items.reverse());
    });
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedItem />
      <Loader />
    </>
  );
};

export default Home;
