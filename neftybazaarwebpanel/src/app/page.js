"use client";

import FeaturedItem from "@/components/FeaturedItems/FeaturedItem";
import { HeroSection } from "@/components/componentsindex";
import { useContext, useEffect, useState } from "react";
import NeftyBazaarContext from "../../Context/NeftyBazaarContext";
import Loader from "@/components/Loader/Loader";
import { getTopCreators } from "../../topCreators/topCreators";
import Title from "@/components/Title/Title";
import FollowerTabCard from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";

import authorStyle from "./author/author.module.css";

const Home = () => {
  const { fetchNFTs, checkIFWalletConnected, currentAccount } =
    useContext(NeftyBazaarContext);

  const [nfts, setNfts] = useState([]);
  const [topCreators, setTopCreators] = useState([]);

  useEffect(() => {
    checkIFWalletConnected();
  }, []);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    if (nfts && nfts.length > 0) {
      const creators = getTopCreators(nfts);
      setTopCreators(creators);
    }
  }, [nfts]);

  return (
    <>
      <HeroSection />
      <FeaturedItem />
      <Title
        heading="শীর্ষ নির্মাতারা"
        paragraph="প্রোফাইল ব্রাউজ করুন, শীর্ষ নির্মাতাদের খুঁজুন"
      />

      {topCreators.length == 0 ? (
        <Loader />
      ) : (
        <div className={authorStyle.author_box}>
          {topCreators.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
