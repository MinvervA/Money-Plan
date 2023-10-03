'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user_wallet}) {
      this.hasMany(user_wallet, {foreignKey : "user_id"})
    }
  }
  user.init({
    nama_lengkap: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    user_image: DataTypes.STRING,
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
    modelName: 'user',
  });
  return user;
};