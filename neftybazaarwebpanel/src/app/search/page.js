import React from "react";

//INTRNAL IMPORT
import Style from "./searchPage.module.css";

// import { NFTCardTwo, Banner } from "../../components/Collection";
import images from "../../img/index";
import FeaturedItem from "@/components/FeaturedItems/FeaturedItem";
import ItemCard from "@/components/ItemCard/ItemCard";
import { Brand, Filter } from "@/components/componentsindex";
import { SearchBar } from "@/components/Search/searchBarIndex";
import { Banner } from "@/components/Collection/collectionIndex";

const page = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />

      <Filter />
      {/* <NFTCardTwo NFTData={collectionArray} /> */}
      <ItemCard />
      <FeaturedItem />
      <Brand />
    </div>
  );
};

export default page;
