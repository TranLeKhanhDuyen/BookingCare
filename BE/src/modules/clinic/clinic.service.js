import { Model } from 'sequelize';
import { Clinic } from './clinic.model';
import { User } from '../user/user.model';

/**
 * @param {number} id
 * @returns {Promise<Model<Clinic> | undefined>}
 */
async function getClinicById(id) {
  return Clinic.findByPk(id, {
    attributes: {
      exclude: 'doctorId'
    },
    include: {
      model: User,
      as: 'user',
      attributes: {
        exclude: ['clinicId', 'specialtyId']
      }
    }
  });
}

export const clinicService = { getClinicById };
