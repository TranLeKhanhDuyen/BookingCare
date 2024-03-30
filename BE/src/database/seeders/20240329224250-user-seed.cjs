'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password =
      '$2a$10$FCot/NMV5bAAQgevwuQUhuvetzw5iMQCAyaAzTdDYPT3wbJXCIYOm'; // BookingCare
    try {
      console.log('User seeding...');
      await queryInterface.bulkInsert('users', [
        {
          firstName: 'Super',
          lastName: 'Admin',
          email: 'superadmin@gmail.com',
          password,
          address: 'Da Nang',
          phoneNumber: '0123456789',
          dob: new Date(),
          role: 'SUPER_ADMIN',
          gender: 'MALE',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Regular',
          lastName: 'Admin',
          email: 'admin@gmail.com',
          password,
          address: 'Da Nang',
          phoneNumber: '0123456798',
          dob: new Date(),
          role: 'ADMIN',
          gender: 'MALE',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
      console.log('User seeded successfully');
    } catch (error) {
      console.error(`User seed error --> ${error}`);
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
