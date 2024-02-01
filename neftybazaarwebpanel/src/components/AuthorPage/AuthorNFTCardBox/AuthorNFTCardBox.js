import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../../img";
import FollowerTabCard from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";
import ItemCard from "@/components/ItemCard/ItemCard";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
// import { NFTCardTwo } from "../../collectionPage/collectionIndex";
// import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
  nfts,
  myNFTs,
}) => {
  const likeArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
  ];
  // console.log(nfts);
  // console.log(myNFTs);
  return (
    <div className={Style.AuthorNFTCardBox}>
      <>
        {nfts.length == 0 ? (
          <Loader />
        ) : (
          <>
            {collectiables && (
              <div className={Style.NFTCardTwo}>
                {nfts.map((data, i) => (
                  <Link href={{ pathname: "/details", query: data }} key={i}>
                    <ItemCard cardData={data} />
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </>

      <>
        {myNFTs.length == 0 ? (
          <Loader />
        ) : (
          <>
            {created && (
              <div className={Style.NFTCardTwo}>
                {myNFTs.map((data, i) => (
                  <Link href={{ pathname: "/details", query: data }} key={i}>
                    <ItemCard cardData={data} />
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </>

      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
