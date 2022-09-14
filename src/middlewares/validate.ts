import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { ICreateProducts, ICreateUser, ILogin } from '../interfaces';
import HttpExeption from '../shared/http.exeption';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const user: ILogin = req.body;
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    password: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(user);
  if (error) {
    throw new HttpExeption(StatusCodes.BAD_REQUEST, error.message);
  }
  next();
};

const validateCreateProduct = (req: Request, res: Response, next: NextFunction) => {
  const product: ICreateProducts = req.body;
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });
  const { error } = schema.validate(product);
  if (error?.message.includes('required')) {
    throw new HttpExeption(StatusCodes.BAD_REQUEST, error.message);
  }
  if (error?.message.includes('length') || error?.message.includes('string')) {
    throw new HttpExeption(StatusCodes.UNPROCESSABLE_ENTITY, error.message);
  }
  next();
};

const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const user: ICreateUser = req.body;
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });
  const { error } = schema.validate(user);
  if (error?.message.includes('required')) {
    throw new HttpExeption(StatusCodes.BAD_REQUEST, error.message);
  }
  if (error?.message.includes('must') || error?.message.includes('greater')) {
    throw new HttpExeption(StatusCodes.UNPROCESSABLE_ENTITY, error.message);
  }
  next();
};

export default { validateLogin, validateCreateProduct, validateCreateUser };