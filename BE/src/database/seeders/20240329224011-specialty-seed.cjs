'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      console.log('Specialty seeding...');
      await queryInterface.bulkInsert('specialties', [
        {
          name: 'Internal Medicine',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Surgery',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pediatrics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Family Medicine',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Obstetrics and Gynecology',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Physical Medicine and Rehabilitation',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cardiology',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Infectious Disease',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Emergency Medicine',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cardiothoracic Surgery',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
      console.log('Specialty seeded successfully');
    } catch (error) {
      console.error(`Specialty seed error --> ${error}`);
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
