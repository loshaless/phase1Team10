'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsToMany(models.User, { through: models.FoodUser, foreignKey: 'foodId' })
    }
    static rupiahFomat(value) {
      let sValue = String(value)
      let result = ''
      let jumlah = 0
      for (let i = sValue.length - 1; i >= 0; i--) {
        jumlah++
        result = sValue[i] + result
        if (jumlah % 3 == 0 && jumlah != 0) {
          result = "." + result
        }
      }
      return `Rp${result},-`
    }
  };
  Food.init({
    food_name: DataTypes.STRING,
    price: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};