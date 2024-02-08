const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");

// Config
dotenv.config({ path: "./config/config.env" });

// Middleware

//JSON REQUEST HANDELER Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const nft = require("./routes/nftRoute");

app.use("/api/v1/", nft);

app.use(errorMiddleware);
module.exports = app;
