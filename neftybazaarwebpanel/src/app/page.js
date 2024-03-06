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
import { getFeatheredItems } from "../../featheredItems/featheredItems";
import { getTopItems } from "../../topItems/topItems";
import HomeItem from "@/components/HomeItem/HomeItem";

const Home = () => {
  const { fetchNFTs, checkIFWalletConnected, currentAccount } =
    useContext(NeftyBazaarContext);

  const [nfts, setNfts] = useState([]);
  const [topCreators, setTopCreators] = useState([]);
  const [featheredItems, setFeatheredItems] = useState([]);
  const [topItems, setTopItems] = useState([]);

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
      const fItems = getFeatheredItems(nfts);
      const topItems = getTopItems(nfts);
      setTopCreators(creators);
      setFeatheredItems(fItems);
      setTopItems(topItems);
    }
  }, [nfts]);

  return (
    <>
      <HeroSection topItems={topItems} />
      <FeaturedItem featheredItems={featheredItems} />
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

      <HomeItem
        featheredItems={featheredItems}
        title="নিউ আইরভেল "
        SubTitle="ব্রাউজ"
      />
    </>
  );
};

export default Home;
