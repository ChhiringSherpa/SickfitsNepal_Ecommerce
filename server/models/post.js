"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      brand: DataTypes.STRING,
      specification: DataTypes.TEXT,
      category: DataTypes.STRING,
      subCategory: DataTypes.STRING,
      color: DataTypes.STRING,
      gender: DataTypes.STRING,
      size_description1: DataTypes.TEXT,
      size_description2: DataTypes.TEXT,
      size_description3: DataTypes.TEXT,
      model_height: DataTypes.STRING,
      model_size: DataTypes.STRING,
      image1: DataTypes.STRING,
      image2: DataTypes.STRING,
      image3: DataTypes.STRING,
      image4: DataTypes.STRING,
      image5: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
