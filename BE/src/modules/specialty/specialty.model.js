import { DataTypes } from 'sequelize';
import { db } from '../../database/data-source';

export const Specialty = db.define('specialties', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING
  }
});
