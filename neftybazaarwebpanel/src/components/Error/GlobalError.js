"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import Style from "./GlobalError.module.css";
import img from "@/img";
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";

const GlobalError = () => {
  const { error, setOpenError } = useContext(NeftyBazaarContext);

  return (
    <div className={Style.Error}>
      <div className={Style.Error_box}>
        <div className={Style.Error_box_info}>
          <Image
            alt="ERROR"
            src={img.neftybazar}
            width={200}
            height={200}
            objectFit="cover"
          />

          <p>Error</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
