import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./FollowerTabCard.module.css";
import { Button } from "@/components/componentsindex";

import img from "@/img";

const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  return (
    <div className={Style.FollowerTabCard}>
      <div className={Style.FollowerTabCard_rank}>
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>

      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <Image
            className={Style.FollowerTabCard_box_img_img}
            src={el.background || img.creatorbackground2}
            alt="profile braground"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={Style.FollowerTabCard_box_profile}>
          <Image
            className={Style.FollowerTabCard_box_profile_img}
            alt="profile picture"
            width={50}
            height={50}
            src={el.user || img.user2}
          />
        </div>

        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_info_name}>
            <h4>
              {el.seller.slice(0, 4)}...{el.seller.slice(-4) || "NONE"}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>{el.total || 0} ETH</p>
          </div>

          <div className={Style.FollowerTabCard_box_info_following}>
            <Button
              btnName="Follow"
              handleClick={() => followMe()}
              icon={following ? <TiTick /> : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
