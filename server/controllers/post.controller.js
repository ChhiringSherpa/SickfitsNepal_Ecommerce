const Validator = require("fastest-validator");
const models = require("../models");
const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");

function save(req, res) {
  const post = {
    product_name: req.body.product_name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    specification: req.body.specification,
    subCategory: req.body.subCategory,
    brand: req.body.brand,
    color: req.body.color,
    gender: req.body.gender,
    size_description1: req.body.size_description1,
    size_description2: req.body.size_description2,
    size_description3: req.body.size_description3,
    model_height: req.body.model_height,
    model_size: req.body.model_size,
    image1: req.files["image1"][0].path,
    image2: req.files["image2"][0].path,
    image3: req.files["image3"][0].path,
    image4: req.files["image4"][0].path,
    image5: req.files["image5"][0].path,
  };

  models.Post.create(post)
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

function show(req, res) {
  const id = req.params.id;

  models.Post.findByPk(id)
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

function index(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function index2(req, res) {
  let filter = {};
  let filter1 = {};
  console.log(req.params);
  if (req.query.category) {
    filter = { category: req.query.category.split(",") };
  }

  if (req.query.color) {
    filter1 = { color: req.query.color.split(",") };
  }

  models.Post.findAll({
    where: {
      [Op.and]: [{ gender: "female" }, filter, filter1],
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function index3(req, res) {
  let filter = {};

  if (req.query.category) {
    filter = { category: req.query.category.split(",") };
  }

  let filter1 = {};

  if (req.query.color) {
    filter1 = { color: req.query.color.split(",") };
  }

  models.Post.findAll({
    where: {
      [Op.and]: [{ gender: "male" }, filter, filter1],
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function update(req, res) {
  const id = req.params.id;

  const updatedPost = {
    product_name: req.body.product_name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    specification: req.body.specification,
    subCategory: req.body.subCategory,
    brand: req.body.brand,
    color: req.body.color,
    gender: req.body.gender,
    size_description1: req.body.size_description1,
    size_description2: req.body.size_description2,
    size_description3: req.body.size_description3,
    model_height: req.body.model_height,
    model_size: req.body.model_size,
  };

  models.Post.update(updatedPost, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Post updated successfully",
        post: updatedPost,
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.Post.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Post deleted successfully",
      });
    })
    .catch((error) => {
      res.status(200).json({
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
    name: "image1",
    maxCount: 1,
  },
  {
    name: "image2",
    maxCount: 1,
  },
  {
    name: "image3",
    maxCount: 1,
  },
  {
    name: "image4",
    maxCount: 1,
  },
  {
    name: "image5",
    maxCount: 1,
  },
]);

module.exports = {
  save: save,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
  upload,
  index2: index2,
  index3: index3,
};
