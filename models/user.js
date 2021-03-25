'use strict';
const { Model } = require('sequelize');
const {hashPassword} = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // User.belongsToMany(models.Food, { through: models.FoodUser, foreignKey: foodId })
        }
        fullName() {
            return this.first_name + " " + this.last_name
        }
    };
    User.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        address: DataTypes.STRING,
        handphone_number: DataTypes.STRING,
        user_name: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',

        hooks: {
            beforeCreate: (instance, options) => {
                if (!instance.last_name) {
                    instance.last_name = instance.first_name
                }
                instance.dataValues.password = hashPassword(instance.dataValues.password)
            }
    }
    });
    return User;
};