'use strict';
const fs = require('fs');



module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = JSON.parse(fs.readFileSync('data/users.json', 'utf8'))
    let newUser = []
      users.forEach(e => {
        e.createdAt = new Date()
        e.updatedAt = new Date()
        newUser.push(e)
      });
     return queryInterface.bulkInsert('Users', newUser, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * return queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
