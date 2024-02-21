"use client";
import { useContext, useEffect, useState } from "react";

//INTRNAL IMPORT
import Style from "./searchPage.module.css";

// import { NFTCardTwo, Banner } from "../../components/Collection";
import images from "../../img/index";
import FeaturedItem from "@/components/FeaturedItems/FeaturedItem";
import { Brand, Filter } from "@/components/componentsindex";
import { SearchBar } from "@/components/Search/searchBarIndex";
import { Banner } from "@/components/Collection/collectionIndex";

//CONTEXT
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";
import NFTCards from "@/components/Collection/NFTCards/NFTCards";
import { getTopItems } from "../../../topItems/topItems";

const page = () => {
  const { fetchNFTs } = useContext(NeftyBazaarContext);

  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items.reverse());
      setNftsCopy(items);
      console.log(getTopItems(items));
    });
  }, []);

  const onHandleSerch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar onHandleSerch={onHandleSerch} onClearSearch={onClearSearch} />
      <Filter />
      <NFTCards NFTData={nfts} />
      <FeaturedItem />
    </div>
  );
};

export default page;
