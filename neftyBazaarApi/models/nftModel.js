const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Nft Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },

  rating: {
    type: Number,
    default: 4.5,
  },

  price: {
    type: Number,
    required: [true, "Nft Must Have Price"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("NFT", NFTSchema);
