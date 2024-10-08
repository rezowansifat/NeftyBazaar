"use client";
import { useContext, useEffect, useState } from "react";

//INTRNAL IMPORT
import Style from "./searchPage.module.css";
import images from "../../img/index";
import { Filter } from "@/components/componentsindex";
import { SearchBar } from "@/components/Search/searchBarIndex";
import { Banner } from "@/components/Collection/collectionIndex";
import { useRouter, useSearchParams } from "next/navigation";

//CONTEXT
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";
import NFTCards from "@/components/Collection/NFTCards/NFTCards";

const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query");

  console.log(query);

  const { fetchNFTs } = useContext(NeftyBazaarContext);

  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items.reverse());
      setNftsCopy(items);
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
      <SearchBar
        query={query}
        onHandleSerch={onHandleSerch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      <NFTCards NFTData={nfts} />
    </div>
  );
};

export default page;
