"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BiErrorAlt } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";

import Style from "./GlobalError.module.css";
import img from "@/img";
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";

const GlobalError = () => {
  const { error, setOpenError, openError } = useContext(NeftyBazaarContext);

  useEffect(() => {
    let timer;
    if (openError) {
      timer = setTimeout(() => {
        setOpenError(false);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [openError, setOpenError]);

  return (
    <div className={`${Style.error} ${openError ? Style.toggled : ""}`}>
      <div className={Style.error_box}>
        <div className={Style.error_box_info}>
          <IoMdCloseCircleOutline
            className={Style.close}
            onClick={() => setOpenError(false)}
          />
          <BiErrorAlt />
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
