// import React from "react";
"use client";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import BlackButton from "../BlackButton/BlackButton";
import { FaArrowRight } from "react-icons/fa";

// import { Button } from "../../components/componentsindex.js";

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          {/* <Image src={images.logo} alt="brand logo" width={100} height={100} /> */}
          <h1>Discover, create and sell your NFT</h1>
          <p>Trade and compete for your share of 95,000 USDT!</p>

          <div className={Style.Brand_box_left_btn}>
            <BlackButton
              className={Style.Brand_box_btn}
              btnName="Explore Now"
              icon={<FaArrowRight />}
              handleClick={() => {}}
            />
            <BlackButton
              className={Style.Brand_box_btn}
              btnName="Create NFT"
              icon={<FaArrowRight />}
              handleClick={() => {}}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image
            className={Style.Brand_box_right_img}
            src={images.myNewPicture}
            // src={images.NewDragonImage}
            alt="brand logo"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
