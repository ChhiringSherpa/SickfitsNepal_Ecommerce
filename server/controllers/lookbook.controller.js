const Validator = require("fastest-validator");
const models = require("../models");
const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");

function save(req, res) {
  const lookbook = {
    mainImage: req.files["mainImage"][0].path,
    product1: req.files["product1"][0].path,
    product2: req.files["product2"][0].path,
    product3: req.files["product3"][0].path,
    product4: req.files["product4"][0].path,
  };

  models.LookBook.create(lookbook)
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).fields([
  {
    name: "mainImage",
    maxCount: 1,
  },
  {
    name: "product1",
    maxCount: 1,
  },
  {
    name: "product2",
    maxCount: 1,
  },
  {
    name: "product3",
    maxCount: 1,
  },
  {
    name: "product4",
    maxCount: 1,
  },
]);

function show(req, res) {
  models.LookBook.findAll()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Post not found!",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

module.exports = {
  save: save,
  upload,
  show: show,
};
