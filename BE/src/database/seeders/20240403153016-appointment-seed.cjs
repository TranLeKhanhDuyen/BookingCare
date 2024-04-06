'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      console.log('Appointment seeding...');
      const appointments = require('./appointments.json');

      await queryInterface.bulkInsert(
        'appointments',
        appointments.map((appointment, index) => ({
          doctorId: appointment.doctorId,
          patientId: ++index,
          status: appointment.status,
          date: appointment.date,
          reasonForMedicalExam: appointment.reasonForMedicalExam,
          createdAt: appointment.createdAt,
          updatedAt: appointment.updatedAt
        }))
      );
      console.log('Appointment seeded successfully');
    } catch (error) {
      console.error(`Appointment seed error --> ${error}`);
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
