"use client";

import { useContext, useEffect, useState } from "react";

//INTERNAL IMPORT
import {
  NFTDescription,
  NFTDetailsImg,
} from "@/components/NFTDetails/NFTDetailsIndex";

import Style from "./NFTDetailsPage.module.css";
import NFTDetailsPage from "@/components/NFTDetails/NFTDetailsPage";
import { Brand } from "@/components/componentsindex";
import Category from "@/components/Category/Category";

//CONTEXT
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const { currentAccount } = useContext(NeftyBazaarContext);

  const searchParams = useSearchParams();
  const router = useRouter();

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    description: "",
    owner: "",
    price: "",
    seller: "",
  });

  useEffect(() => {
    const paramsObject = {};

    for (const [key, value] of searchParams) {
      paramsObject[key] = value;
    }

    setNft((prevNft) => ({
      ...prevNft,
      ...paramsObject,
    }));
  }, [searchParams]);

  return (
    <>
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </>
  );
};
export default page;
