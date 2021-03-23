'use strict';

let foodUser = require('../data/foodUsers.json')
foodUser.forEach(e => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
