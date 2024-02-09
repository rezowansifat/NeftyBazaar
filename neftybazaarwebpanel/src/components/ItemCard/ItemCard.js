import Link from "next/link";
import Image from "next/image";
import images from "../../img/index";
import { FaRegHeart } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa6";

import Style from "./ItemCard.module.css";
import Loader from "../Loader/Loader";

const ItemCard = ({ cardData }) => {
  return (
    <>
      {cardData ? (
        <div className={Style.hero_card}>
          {/* CARD MEDIA */}
          <div className={Style.card_media}>
            <div className={Style.img_box}>
              <Image
                src={cardData.image}
                alt="Card Image"
                width={330}
                height={340}
              />
            </div>

            <span className={Style.wishlist_button}>
              <FaRegHeart />
            </span>

            {/* BUTTON */}
            <div className={Style.button_place}>
              <div>
                <span>বিড করুন</span>
              </div>
            </div>
          </div>

          {/* CARD INFO */}
          <div className={Style.card_info}>
            <div className={Style.card_name}>
              <span>
                {cardData.name.substring(0, 20)}
                {cardData.name.length > 16 ? "...." : ""}
              </span>
            </div>
            <div className={Style.item_info}>
              <div className={Style.author_avatar}>
                <Image src={images.user10} alt="Image" />
              </div>
              <div className={Style.author_info}>
                <span>পোস্ট করেছেন:</span>
                <p>
                  <span>Rezowan Sifat</span>
                </p>
              </div>
            </div>
            <div className={Style.divider}></div>
            <div className={Style.card_price}>
              <span className={Style.text_bid}>বর্তমান মূল্য</span>

              <p>
                <FaEthereum /> {cardData.price}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ItemCard;
