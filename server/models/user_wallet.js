'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user, wallet}) {
      this.belongsTo(user, {foreignKey : "user_id"})
      this.belongsTo(wallet, {foreignKey : "wallet_id"})
    }
  }
  user_wallet.init({
    saldo: DataTypes.INTEGER,
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
    modelName: 'user_wallet',
  });
  return user_wallet;
};