const hre = require("hardhat");

async function main() {
  const neftyBazaar = await hre.ethers.deployContract("NeftyBazaar");

  await neftyBazaar.waitForDeployment();

  console.log("Deployed Address Contract " + neftyBazaar.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
