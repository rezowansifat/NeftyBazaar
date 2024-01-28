"use client";
import { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "./author.module.css";
import { Brand } from "@/components/componentsindex";
import images from "../../img/index";

//Context
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";

import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "@/components/AuthorPage/componentIndex";
import Title from "@/components/Title/Title";
import FollowerTabCard from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";

const page = () => {
  //SMART CONTRACT DATA
  const { fetchMyNFT, currentAccount } = useContext(NeftyBazaarContext);

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

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFT("fetchItemsListed").then((item) => {
      setNfts(item);
    });
  }, []);

  useEffect(() => {
    fetchMyNFT("fetchmynfts").then((item) => {
      setMyNFTs(item);
    });
  }, []);

  return (
    <div className={Style.author}>
      <AuthorProfileCard currentAccount={currentAccount} />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNFTs={myNFTs}
      />

      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio
"
      />

      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>

      <Brand />
    </div>
  );
};

export default page;
