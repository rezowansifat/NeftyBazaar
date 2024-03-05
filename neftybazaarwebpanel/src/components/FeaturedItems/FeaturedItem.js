"use client";

import ItemCard from "../ItemCard/ItemCard";

import Style from "./FeaturedItem.module.css";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Loader from "../Loader/Loader";

const FeaturedItem = ({ featheredItems }) => {
  return (
    <div className={Style.featured_item}>
      <div className={Style.featured_cont}>
        <div className={Style.heading_section}>
          <h2>ফিচার্ড আইটেম</h2>
          <Link href="/explore-3">
            <span>আরও দেখুন</span> <FaLongArrowAltRight />
          </Link>
        </div>

        {/* END OF HEADER */}
        {featheredItems.length == 0 ? (
          <Loader />
        ) : (
          <Swiper
            freeMode={true}
            grabCursor={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[FreeMode]}
            className="featured_swiper"
          >
            {featheredItems.map((data, i) => (
              <SwiperSlide className="featured_swiper_slide">
                <Link href={{ pathname: "/details", query: data }} key={i}>
                  <ItemCard cardData={data} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default FeaturedItem;
