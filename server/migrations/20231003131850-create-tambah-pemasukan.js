'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tambah_pemasukans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_pemasukan: {
        type: Sequelize.STRING
      },
      jumlah_pemasukan: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      deskripsi_pemasukan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tambah_pemasukans');
  }
};