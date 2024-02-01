"use client";

import FeaturedItem from "@/components/FeaturedItems/FeaturedItem";
import { HeroSection } from "@/components/componentsindex";
import Link from "next/link";
import { useContext, useEffect } from "react";

import NeftyBazaarContext from "../../Context/NeftyBazaarContext";
import Loader from "@/components/Loader/Loader";
const Home = () => {
  const { checkIFWalletConnected, currentAccount } =
    useContext(NeftyBazaarContext);

  useEffect(() => {
    checkIFWalletConnected();
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
