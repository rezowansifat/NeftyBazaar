const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");

const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/../public/data/nft-simple.json`)
);

// GET ALL NFT
exports.getAllNFTs = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    result: nfts.length,
    data: {
      nfts,
    },
  });
});

// POST SINGLE NFT
exports.createNFT = catchAsyncErrors(async (req, res, next) => {
  const newID = nfts[nfts.length - 1].id + 1;
  const newNFT = Object.assign({ id: newID }, req.body);

  nfts.push(newNFT);

  fs.writeFile(
    `${__dirname}/../data/nft-simple.json`,
    JSON.stringify(nfts),
    (error) => {
      return next(new ErrorHander(error, 401));
    }
  );

  res.status(200).json({
    success: true,
    data: {
      nft: newNFT,
    },
  });
});

//GET SINGLE NFT
exports.getSingleNFT = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id * 1;
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return next(
      new ErrorHander(`No Meeting Occurred Yeat: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: {
      nft,
    },
  });
});

//PATCH NFT
exports.updateNFT = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id * 1;
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return next(
      new ErrorHander(`No Meeting Occurred Yeat: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: "update successfully",
    data: {
      nft,
    },
  });
});

//DELETE NFT
exports.deleteNFT = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id * 1;
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return next(
      new ErrorHander(`No Meeting Occurred Yeat: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
