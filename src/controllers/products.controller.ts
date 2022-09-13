import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import productServices from '../services/product.services';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const newProduct = req.body;
  const result = await productServices.createProduct(newProduct);
  res.status(StatusCodes.CREATED).json(result);
};

const getAll = async (req: Request, res: Response): Promise<void> => {
  const result = await productServices.getAll();
  res.status(StatusCodes.OK).json(result);
};

export default { createProduct, getAll };