import { ApiHelper } from '../../core/helpers/api.helper';
import { Specialty } from './specialty.model';

async function getListWithPaging(pagination) {
  return Specialty.findAndCountAll({
    limit: pagination.limit,
    offset: ApiHelper.getPaginationOffset(pagination)
  });
}

export const specialtyService = { getListWithPaging };
