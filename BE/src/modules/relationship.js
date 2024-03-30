import { Appointment } from './appointment/appointment.model';
import { Patient } from './patient/patient.model';
import { Specialty } from './specialty/specialty.model';
import { User } from './user/user.model';

// ════════════════════════════════════════════

Specialty.hasMany(User);
User.belongsTo(Specialty);

// ════════════════════════════════════════════

User.belongsToMany(Patient, { through: Appointment, foreignKey: 'doctorId' });
Patient.belongsToMany(User, { through: Appointment, foreignKey: 'patientId' });

Appointment.belongsTo(User, { foreignKey: 'doctorId', as: 'doctor' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });

// ════════════════════════════════════════════
