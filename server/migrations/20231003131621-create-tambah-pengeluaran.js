'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tambah_pengeluarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_pengeluaran: {
        type: Sequelize.STRING
      },
      jumlah_pengeluaran: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      deskripsi_pengeluaran: {
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
    await queryInterface.dropTable('tambah_pengeluarans');
  }
};