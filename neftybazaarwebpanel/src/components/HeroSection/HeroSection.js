"use client";

import Image from "next/image";
import Style from "./HeroSection.module.css";
import { TiLocationArrowOutline } from "react-icons/ti";

//INTERNAL IMPORT
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_container}>
        <div className={Style.content}>
          <h1>শীর্ষ কাজের নতুন বিশ্ব</h1>
          <p>
            বিরল ডিজিটাল শিল্পের জগতে স্বাগতম। সেখানে হাতে-বাছাই করা ডিজিটাল
            শিল্পীর থেকে সেরা শিল্প অন্বেষণ করুন এবং লুকানো মণি খুঁজুন।
          </p>
          <div className={Style.herro_buttons}>
            <Button
              btnName="আরো দেখুন"
              handleClick={() => {}}
              icon={<TiLocationArrowOutline />}
            />
            <Button
              btnName="সমস্ত সংগ্রহ"
              handleClick={() => {}}
              icon={<TiLocationArrowOutline />}
            />
          </div>
        </div>
      </div>
      {/* 
      ANIMATION */}
      <>
        <div className={Style.icon1}>
          <Image
            src={images.hero_back_ico_1}
            alt="Home Background Icon"
            width={4}
            height={4}
          />
        </div>
        <div className={Style.icon2}>
          <Image
            src={images.hero_back_ico_1}
            alt="Home Background Icon"
            width={5}
            height={5}
          />
        </div>
        <div className={Style.icon3}>
          <Image
            src={images.hero_back_ico_1}
            alt="Home Background Icon"
            width={5}
            height={5}
          />
        </div>
        <div className={Style.icon4}>
          <Image
            src={images.hero_back_ico_2}
            alt="Home Background Icon"
            width={60}
            height={60}
          />
        </div>
        <div className={Style.icon5}>
          <Image
            src={images.hero_back_ico_3}
            alt="Home Background Icon"
            width={60}
            height={60}
          />
        </div>
        <div className={Style.icon6}>
          <Image
            src={images.hero_back_ico_4}
            alt="Home Background Icon"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.icon7}>
          <Image
            src={images.hero_back_ico_5}
            alt="Home Background Icon"
            width={30}
            height={30}
          />
        </div>
        <div className={Style.icon8}>
          <Image
            src={images.hero_back_ico_5}
            alt="Home Background Icon"
            width={25}
            height={25}
          />
        </div>
      </>
    </div>
  );
};

export default HeroSection;
