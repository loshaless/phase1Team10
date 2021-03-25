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
      Food.belongsToMany(models.User, { through: models.FoodUser, foreignKey: 'foodId' })
    }
    static findAllOrderedByPrice(){
      return Food.findAll({ order: [
        ['price', 'ASC'],
    ],})
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