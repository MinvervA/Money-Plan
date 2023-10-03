'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tambah_pemasukan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tambah_pemasukan.init({
    nama_pemasukan: DataTypes.STRING,
    jumlah_pemasukan: DataTypes.INTEGER,
    date: DataTypes.STRING,
    deskripsi_pemasukan: DataTypes.STRING,
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
    modelName: 'tambah_pemasukan',
  });
  return tambah_pemasukan;
};