'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //add data
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456',
        firstName: 'admin',
        lastName: 'account',
        address: 'DaNang',
        gender: 1,
        typeRole: 'ROLE',
        keyRole: 'R1',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    //rollback
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
