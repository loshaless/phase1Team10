'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let foods = JSON.parse(fs.readFileSync('data/foods.json', 'utf8'))
    let newFood = []
      foods.forEach(e => {
        e.createdAt = new Date()
        e.updatedAt = new Date()
        newFood.push(e)
      });
    
     return queryInterface.bulkInsert('Food', newFood, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * return queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Food', null, {});
  }
};
