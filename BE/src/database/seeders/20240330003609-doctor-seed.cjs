'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      console.log('Doctor seeding...');
      const doctors = require('./doctors.json');

      await queryInterface.bulkInsert(
        'users',
        doctors.map((doctor) => doctor)
      );
      console.log('Doctor seeded successfully');
    } catch (error) {
      console.error(`Doctor seed error --> ${error}`);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
