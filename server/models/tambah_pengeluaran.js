'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tambah_pengeluaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tambah_pengeluaran.init({
    nama_pengeluaran: DataTypes.STRING,
    jumlah_pengeluaran: DataTypes.INTEGER,
    date: DataTypes.STRING,
    deskripsi_pengeluaran: DataTypes.STRING,
    createdAt: {
      type : DataTypes.STRING,
      defaultValue: new Date()
    },
    updatedAt: {
      type : DataTypes.STRING,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'tambah_pengeluaran',
  });
  return tambah_pengeluaran;
};