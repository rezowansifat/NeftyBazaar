const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");

//GET ALL USER
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

//GET SINGLE USER
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

//CREATE USER
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

//UPDATE USER
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "updated successfully",
  });
});

//DELETE USER
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
