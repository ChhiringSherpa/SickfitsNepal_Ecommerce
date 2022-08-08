"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LookBooks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mainImage: {
        type: Sequelize.STRING,
      },
      product1: {
        type: Sequelize.STRING,
      },

      product2: {
        type: Sequelize.STRING,
      },

      product3: {
        type: Sequelize.STRING,
      },

      product4: {
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
    await queryInterface.dropTable("LookBooks");
  },
};
