import { DataTypes } from 'sequelize';
import { db } from '../../database/data-source';
import { Patient } from '../patient/patient.model';
import { User } from '../user/user.model';
import { APPOINTMENT_STATUS } from '../../core/constants/appointment-status';

export const Appointment = db.define('appointments', {
  doctorId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  patientId: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    references: {
      model: Patient,
      key: 'id'
    }
  },
  status: {
    type: DataTypes.ENUM(...Object.values(APPOINTMENT_STATUS)),
    defaultValue: APPOINTMENT_STATUS.PENDING
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  diagnosis: {
    type: DataTypes.STRING
  },
  prescription: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  reasonForMedicalExam: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
