"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      secondary_phone: DataTypes.INTEGER,
      product_name: DataTypes.STRING,
      size: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
