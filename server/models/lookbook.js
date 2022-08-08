"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LookBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LookBook.init(
    {
      mainImage: DataTypes.STRING,
      product1: DataTypes.STRING,

      product2: DataTypes.STRING,

      product3: DataTypes.STRING,

      product4: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "LookBook",
    }
  );
  return LookBook;
};
