import { DataTypes } from 'sequelize';
import { GENDER } from '../../core/constants/gender';
import { USER_ROLE } from '../../core/constants/user-role';
import { db } from '../../database/data-source';
import { Specialty } from '../specialty/specialty.model';

export const User = db.define('users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM(...Object.values(USER_ROLE)),
    allowNull: false,
    defaultValue: USER_ROLE.USER
  },
  gender: {
    type: DataTypes.ENUM(...Object.values(GENDER)),
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING
  },
  specialtyId: {
    type: DataTypes.BIGINT,
    references: {
      model: Specialty,
      key: 'id'
    }
  }
});

User.prototype.toJSON = function () {
  var values = { ...this.get() };

  delete values.password;
  return values;
};
