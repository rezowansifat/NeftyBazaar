import Style from "./HeroCard.module.css";
import Link from "next/link";
import Image from "next/image";
import images from "../../../img/index";
import { FaRegHeart } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa6";

const HeroCard = () => {
  return (
    <div className={Style.hero_card}>
      {/* CARD MEDIA */}
      <div className={Style.card_media}>
        <Link href="#">
          <Image
            src={images.hero_card_img}
            alt="Card Image"
            width={330}
            height={340}
          />
        </Link>
        <span className={Style.wishlist_button}>
          <FaRegHeart />
        </span>

        {/* BUTTON */}
        <div className={Style.button_place}>
          <Link href="#">
            <span>বিড করুন</span>
          </Link>
        </div>
      </div>

      {/* CARD INFO */}
      <div className={Style.card_info}>
        <div className={Style.card_name}>
          <Link href="/#">ডেকো সার্পেন্টাইন বেল্ট</Link>
        </div>
        <div className={Style.card_price}>
          <FaEthereum />
          <p> 0,34</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
