'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let foods = JSON.parse(fs.readFileSync('data/foodUsers.json', 'utf8'))
    let newFoodUser = []
      foods.forEach(e => {
        e.createdAt = new Date()
        e.updatedAt = new Date()
        newFoodUser.push(e)
      });
     return queryInterface.bulkInsert('FoodUsers', foodUser, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * return queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('FoodUsers', null, {});
  }
};
