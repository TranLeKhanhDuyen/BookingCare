import { DataTypes } from 'sequelize';
import { db } from '../../database/data-source';

export const Patient = db.define('patients', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
