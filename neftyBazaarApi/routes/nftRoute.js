const express = require("express");

const {
  getAllNFTs,
  createNFT,
  getSingleNFT,
} = require("../controllers/nftController");

//Routs
const router = express.Router();

router.route("/nfts").get(getAllNFTs).post(createNFT);
router.route("/nfts/:id").get(getSingleNFT);

module.exports = router;
