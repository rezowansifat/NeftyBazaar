"use client";

import { useContext, useEffect, useState } from "react";

import Style from "./create-nft.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import { UploadNFT } from "@/components/createNFT/uploadNFTIndex";

//CONTEXT
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";

const page = () => {
  const { uploadToIPFS, createNFT } = useContext(NeftyBazaarContext);

  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>নতুন NFT তৈরি করুন</h1>
          <ul className={Style.widget_menu_tab}>
            <li>
              <span>
                <span>1</span>আপলোড করুন <i></i>
                <RxDoubleArrowRight />
              </span>
            </li>
            <li>
              <span>
                <span>2</span>বর্ণনা লিখুন <i></i>
                <RxDoubleArrowRight />
              </span>
            </li>
            <li>
              <span>
                <span>3</span>জমা দিন
              </span>
            </li>
          </ul>
        </div>

        {/* Upload NFT */}
        <div className={Style.uploadNFT_box_form}>
          <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default page;
