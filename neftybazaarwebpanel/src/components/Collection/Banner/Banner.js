"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

//INTERNAL IMPORT
import Style from "./Banner.module.css";
import { Button } from "@/components/componentsindex";
import { CiLocationArrow1 } from "react-icons/ci";
import ItemCard from "@/components/ItemCard/ItemCard";
import images from "../../../img/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_cont}>
        <h2>ডিসকভার করুন, নিজ্বস্য এনএফটি তৈরি ও বিক্রয় করুন</h2>
        <Button
          btnName="প্রথম এনএফটি তৈরী করুন "
          icon={<CiLocationArrow1 />}
          handleClick={() => {}}
        />

        <div className={Style.banner_slide}>
          <Swiper
            grabCursor={false}
            direction={"vertical"}
            speed={5000}
            slidesPerView={1}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            centeredSlides={true}
          >
            <SwiperSlide>
              <Image
                src={images.hero_card_img}
                alt="Card Image"
                width={330}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={images.hero_card_img}
                alt="Card Image"
                width={330}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
