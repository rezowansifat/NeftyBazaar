import React from "react";
import Image from "next/image";

import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <div className={Style.logo}>
            <Image
              src={images.neftybazar}
              alt="footer logo"
              height={100}
              width={150}
            />
          </div>
          <p>
            নন-ফাঞ্জিবল টোকেন (NFTs) এর জন্য বাংলাদেশ এর প্রথম এবং বৃহত্তম
            ডিজিটাল মার্কেটপ্লেস। ডিজিটাল আইটেম কিনুন, বিক্রি করুন এবং ডিসকভার
            করুন।
          </p>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>ডিসকভার</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>হেল্প সেন্টার</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>সাবস্ক্রাইব</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="ইমেইল এড্রেস দিন *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
