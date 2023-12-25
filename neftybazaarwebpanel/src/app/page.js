"use client";

import FeaturedItem from "@/components/FeaturedItems/FeaturedItem";
import { HeroSection } from "@/components/componentsindex";
import Link from "next/link";
import { useContext, useEffect } from "react";

import NeftyBazaarContext from "../../Context/NeftyBazaarContext";
const Home = () => {
  //const { chkcontract } = useContext(NeftyBazaarContext);

  return (
    <>
      <HeroSection />
      <FeaturedItem />
    </>
  );
};

export default Home;
