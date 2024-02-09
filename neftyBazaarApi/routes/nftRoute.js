const express = require("express");

const {
  getAllNFTs,
  createNFT,
  getSingleNFT,
  updateNFT,
  deleteNFT,
} = require("../controllers/nftController");

//Routs
const router = express.Router();

router.route("/nfts").get(getAllNFTs).post(createNFT);
router.route("/nfts/:id").get(getSingleNFT).patch(updateNFT).delete(deleteNFT);

module.exports = router;
