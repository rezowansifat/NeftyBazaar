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
          <Image src={images.logo} alt="footer logo" height={100} width={150} />
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
