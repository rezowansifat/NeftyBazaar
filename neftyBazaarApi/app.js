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

//Static
app.use(express.static(`${__dirname}/public/img`));

// Route Imports
const nft = require("./routes/nftRoute");
const user = require("./routes/userRoute");

app.use("/api/v1/", nft);
app.use("/api/v1/", user);

app.use(errorMiddleware);
module.exports = app;
