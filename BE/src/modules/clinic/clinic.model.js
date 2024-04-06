import { DataTypes } from 'sequelize';
import { db } from '../../database/data-source';
import { User } from '../user/user.model';

export const Clinic = db.define('clinics', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  phone: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  },
  openingTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  closingTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  fee: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});
