'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategori_pengeluaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kategori_pengeluaran.init({
    nama_kategori: DataTypes.STRING,
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
    modelName: 'kategori_pengeluaran',
  });
  return kategori_pengeluaran;
};