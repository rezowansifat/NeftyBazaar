require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_MUMBAI_RPC_URL = process.env.POLYGON_MUMBAI_RPC_URL;
const MATIC_PRIVATE_KEY = process.env.MATIC_PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.9",
      },
      {
        version: "0.8.20",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygon_mumbai: {
      url: POLYGON_MUMBAI_RPC_URL,
      accounts: MATIC_PRIVATE_KEY !== undefined ? [MATIC_PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 80001,
    },
  },
};
