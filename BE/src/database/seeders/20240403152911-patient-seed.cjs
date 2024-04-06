'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      console.log('Patient seeding...');
      const appointments = require('./appointments.json');

      await queryInterface.bulkInsert(
        'patients',
        appointments.map((appointment) => ({
          fullName: appointment.fullName,
          email: appointment.email,
          phoneNumber: appointment.phoneNumber,
          dob: appointment.dob,
          createdAt: appointment.createdAt,
          updatedAt: appointment.updatedAt
        }))
      );
      console.log('Patient seeded successfully');
    } catch (error) {
      console.error(`Patient seed error --> ${error}`);
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
