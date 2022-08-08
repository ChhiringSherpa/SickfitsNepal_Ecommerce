"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
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
  Wishlist.init(
    {
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      brand: DataTypes.STRING,
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Wishlist",
    }
  );
  return Wishlist;
};
