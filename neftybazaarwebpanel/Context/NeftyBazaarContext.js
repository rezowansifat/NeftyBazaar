import React, { useContext, useEffect, useState } from "react";
import web3modal from "web3modal";
import { ethers } from "ethers";
import { Router } from "next/router";

//INTERNAL IMPORT
import { NeftyBazaarAddress, NeftyBazaarABI } from "./constants";

export const NeftyBazaarContext = React.createContext();

export const NeftyBazaarProvider = ({ children }) => {
  return (
    <NeftyBazaarContext.Provider value={{}}>
      {children}
    </NeftyBazaarContext.Provider>
  );
};

export default NeftyBazaarContext;
