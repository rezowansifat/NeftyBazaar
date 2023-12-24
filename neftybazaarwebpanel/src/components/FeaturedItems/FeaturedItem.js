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
import { Pagination } from "swiper/modules";

const FeaturedItem = () => {
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

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ItemCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedItem;
