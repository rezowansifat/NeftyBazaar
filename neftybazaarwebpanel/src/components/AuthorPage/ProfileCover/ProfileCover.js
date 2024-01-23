"use client";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./ProfileCover.module.css";
import { Button } from "@/components/componentsindex";
import { CiLocationArrow1 } from "react-icons/ci";
import ItemCard from "@/components/ItemCard/ItemCard";
import images from "../../../img/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const ProfileCover = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_cont}>
        <Image src={bannerImage} alt="Cover Image" width={1080} height={340} />
      </div>
    </div>
  );
};

export default ProfileCover;
