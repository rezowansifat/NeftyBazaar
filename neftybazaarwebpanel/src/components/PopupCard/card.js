"use client";
import images from "../../img/index";
import { useState } from "react";
import Style from "./Card.module.css";
import Image from "next/image";

const card = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const itemArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "walletConnect",
    },
    {
      provider: images.provider3,
      name: "walletlink",
    },
    {
      provider: images.provider1,
      name: "Formatic",
    },
  ];

  return (
    <div>
      <div className={Style.connectCardWallet}>
        <div className={Style.connectCardWallet_box}>
          <h1>Connect your wallet</h1>
          <div className={Style.connectCardWallet_box_provider}>
            {itemArray.map((el, i) => (
              <div
                className={`${Style.connectCardWallet_box_provider_item} ${
                  activeBtn == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => setActiveBtn(i + 1)}
              >
                <Image
                  src={el.provider}
                  alt={el.provider}
                  width={50}
                  height={50}
                  className={Style.connectCardWallet_box_provider_item_img}
                />
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
