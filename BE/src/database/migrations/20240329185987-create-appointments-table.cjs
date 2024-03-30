'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      doctorId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      patientId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        references: {
          model: 'patients',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('PENDING', 'APPROVED', 'CANCELLED', 'COMPLETED'),
        defaultValue: 'PENDING'
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      prescription: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments');
  }
};
