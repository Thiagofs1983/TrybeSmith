import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import productServices from '../services/product.services';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const result = await productServices.createProduct(newProduct);
  res.status(StatusCodes.CREATED).json(result);
};

export default { createProduct };