const models = require("../models");
const multer = require("multer");
const path = require("path");

const e = require("express");

async function save(req, res) {
  await models.Wishlist.findOne({
    where: { product_id: req.body.product_id, user_id: req.body.user_id },
  })
    .then((result) => {
      if (result) {
        res.send({ message: "Product exists already" });
      } else {
        const wishlist = {
          user_id: req.body.user_id,
          product_id: req.body.product_id,
          product_name: req.body.product_name,
          price: req.body.price,
          brand: req.body.brand,
          image: req.body.image,
        };

        models.Wishlist.create(wishlist)
          .then((result) => {
            res.status(201).json({
              message: "Added to wishlist successfully",
              post: result,
              success: true,
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: "Something went wrong",
              error: error,
            });
          });
      }
    })
    .catch((error) => {
      res.send({
        message: "Something went wrong!",
      });
    });
}

function index(req, res) {
  user_id = req.body.user_id;
  models.Wishlist.findAll({ where: { user_id: user_id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function show(req, res) {
  const user_id = req.query.user_id;

  models.Wishlist.findAll({ where: { user_id: user_id } })
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

function destroy(req, res) {
  const id = req.params.id;

  models.Wishlist.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Wishlist deleted successfully",
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

module.exports = {
  save: save,
  index: index,
  show: show,
  destroy: destroy,
};
