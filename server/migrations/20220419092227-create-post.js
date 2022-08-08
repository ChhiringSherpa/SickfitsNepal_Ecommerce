"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      brand: {
        type: Sequelize.STRING,
      },
      specification: {
        type: Sequelize.TEXT,
      },
      category: {
        type: Sequelize.STRING,
      },
      subCategory: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      size_description1: {
        type: Sequelize.TEXT,
      },
      size_description2: {
        type: Sequelize.TEXT,
      },
      size_description3: {
        type: Sequelize.TEXT,
      },
      model_height: {
        type: Sequelize.STRING,
      },
      model_size: {
        type: Sequelize.STRING,
      },
      image1: {
        type: Sequelize.STRING,
      },
      image2: {
        type: Sequelize.STRING,
      },
      image3: {
        type: Sequelize.STRING,
      },
      image4: {
        type: Sequelize.STRING,
      },
      image5: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
