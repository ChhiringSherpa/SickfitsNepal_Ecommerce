const models = require("../models");

function save(req, res) {
  const order = {
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

  models.Orders.create(order)
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

module.exports = {
  save: save,
};
