"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Bag.init(
    {
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
      product_name: DataTypes.STRING,
      brand: DataTypes.STRING,
      price: DataTypes.INTEGER,
      size: DataTypes.STRING,
      color: DataTypes.STRING,
      image: DataTypes.STRING,
      confirm_order: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bag",
    }
  );
  return Bag;
};
