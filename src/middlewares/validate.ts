import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { ILogin } from '../interfaces';
import HttpExeption from '../shared/http.exeption';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const user: ILogin = req.body;
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    password: Joi.string().min(2).required,
  });
  const { error } = schema.validate(user);
  if (error) {
    throw new HttpExeption(StatusCodes.BAD_REQUEST, error.message);
  }
  next();
};

export default { validateLogin };