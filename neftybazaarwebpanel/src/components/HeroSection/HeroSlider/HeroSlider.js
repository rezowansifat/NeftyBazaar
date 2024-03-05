import Style from "./HeroSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from "next/link";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import HeroCard from "../HeroCard/HeroCard";

const HeroSlider = ({ topItems }) => {
  console.log(topItems);
  return (
    <div className={Style.hero_slider}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="hero_hwiper"
      >
        {topItems.map((data, i) => (
          <SwiperSlide className="hero_hwiper_slide">
            <div className={Style.swiper_slide}>
              <Link href={{ pathname: "/details", query: data }} key={i}>
                <HeroCard cardData={data} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
