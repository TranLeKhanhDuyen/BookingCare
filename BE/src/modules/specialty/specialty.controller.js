import express from 'express';
import { specialtyService } from './specialty.service';
import { StatusCodes } from 'http-status-codes';
import { ApiHelper } from '../../core/helpers/api.helper';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function getSpecialties(req, res, next) {
  const pagination = ApiHelper.parsePaging(req.query);
  const data = await specialtyService.getListWithPaging(pagination);

  res.status(StatusCodes.OK).json({
    items: data.rows,
    pagination: ApiHelper.setPaginationTotal(pagination, data.count)
  });
}

export const specialtyController = { getSpecialties };
