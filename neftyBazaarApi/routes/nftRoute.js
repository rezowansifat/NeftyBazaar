const express = require("express");

const { getAllNfts, createNfts } = require("../controllers/nftController");

//Routs
const router = express.Router();

router.route("/nfts").get(getAllNfts);
router.route("/nfts").post(createNfts);

module.exports = router;
