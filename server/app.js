const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");

const postsRoute = require("../server/routes/posts");
const userRoute = require("../server/routes/user");
const wishlistRoute = require("../server/routes/wishlist");
const bagRoute = require("../server/routes/bag");
const lookbookRoute = require("../server/routes/lookbook");
const ordersRoute = require("../server/routes/orders");
const app = express();

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(cookieParser());

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/wishlist", wishlistRoute);
app.use("/bag", bagRoute);
app.use("/lookbook", lookbookRoute);
app.use("/orders", ordersRoute);
module.exports = app;
