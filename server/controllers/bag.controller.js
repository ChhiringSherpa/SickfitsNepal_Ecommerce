const models = require("../models");

function save(req, res) {
  const bag = {
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    product_name: req.body.product_name,
    price: req.body.price,
    brand: req.body.brand,
    image: req.body.image,
    size: req.body.size,
    color: req.body.color,
    user_name: req.body.user_name,
  };

  models.Bag.create(bag)
    .then((result) => {
      res.status(201).json({
        message: "Added to bag successfully",
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

function show(req, res) {
  const user_id = req.query.user_id;

  models.Bag.findAll({ where: { user_id: user_id } })
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

  models.Bag.destroy({ where: { id: id } })
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

function update(req, res) {
  const id = req.body.user_id;
  const updatedPost = {
    confirm_order: req.body.confirmed_order,
  };

  models.Bag.update(updatedPost, { where: { user_id: id } })
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

module.exports = {
  save: save,
  show: show,
  destroy: destroy,
  update: update,
};
