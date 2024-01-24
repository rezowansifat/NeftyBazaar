import React, { useState } from "react";
import Image from "next/image";
import { MdVerified, MdOutlineReportProblem } from "react-icons/md";
import { MdIosShare } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../../img/index";
import { Button } from "@/components/componentsindex";
import ProfileCover from "../ProfileCover/ProfileCover";
//import { Button } from "../../components/componentsindex.js";

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  //copyAddress function
  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.profile_cover}>
        <ProfileCover bannerImage={images.creatorbackground2} />
      </div>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Dony Herrera
            <span>
              <MdVerified />
            </span>
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input
              type="text"
              value="0x829BD824B03D092293333..A830"
              id="myInput"
            />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          <p>
            Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />

          <div
            className={Style.AuthorProfileCard_box_share_icon}
            onClick={() => openShare()}
          >
            <MdIosShare />
          </div>

          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>
                Instragram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>
                LinkedIn
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>
                YouTube
              </p>
            </div>
          )}

          <div
            className={Style.AuthorProfileCard_box_share_icon}
            onClick={() => openReport()}
          >
            <BsThreeDots />
          </div>

          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>
              Report abouse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;