'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      console.log('Clinic seeding...');
      const clinics = require('./clinics.json');

      await queryInterface.bulkInsert(
        'clinics',
        clinics.map((clinic) => clinic)
      );
      console.log('Clinic seeded successfully');
    } catch (error) {
      console.error(`Clinic seed error --> ${error}`);
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
