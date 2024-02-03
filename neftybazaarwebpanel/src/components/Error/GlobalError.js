"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BiErrorAlt } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";

import Style from "./GlobalError.module.css";
import img from "@/img";
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";

const GlobalError = () => {
  const { error, setOenError, openError } = useContext(NeftyBazaarContext);
  console.log(openError);
  console.log(error);
  return (
    <div
      className={`${Style.Error}, ${
        openError ? Style.Error_open : Style.Error_close
      }`}
    >
      <div className={Style.Error_box}>
        <div className={Style.Error_box_info}>
          <IoMdCloseCircleOutline
            className={Style.close}
            onClick={() => setOenError(false)}
          />
          <BiErrorAlt />
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
