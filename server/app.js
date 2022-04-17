const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const postsRoute = require("../server/routes/posts");
const userRoute = require("../server/routes/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use("/posts", postsRoute);
app.use("/user", userRoute);

module.exports = app;
