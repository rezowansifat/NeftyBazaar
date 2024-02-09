const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");

const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/nft-simple.json`)
);

// Get all users(admin)
exports.getAllNfts = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    result: nfts.length,
    data: {
      nfts,
    },
  });
});

exports.createNfts = catchAsyncErrors(async (req, res, next) => {
  //   const nft = req.body;
  const newID = nfts[nfts.length - 1] + 1;
  const newNFT = Object.assign({ id: newID }, req.body);
  nfts.push(newNFT);
  res.status(200).json({
    success: true,
    // result: nfts.length,
    data: {
      newNFT,
    },
  });
});
