import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import orderServices from '../services/order.services';

const getAll = async (req: Request, res: Response): Promise<void> => {
  const result = await orderServices.getAll();
  res.status(StatusCodes.OK).json(result);
};

export default { getAll };