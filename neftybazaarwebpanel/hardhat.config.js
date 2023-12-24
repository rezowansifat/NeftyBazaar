require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
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
  // defaultNetwork: "hardhat",
  // networks: {
  //   hardhat: {
  //     chainId: 31337,
  //   },
  // },
};
