import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICreateUser, ILogin } from '../interfaces';
import usersServices from '../services/users.services';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const user: ICreateUser = req.body;
  const token = await usersServices.createUser(user);
  res.status(StatusCodes.CREATED).json(token);
};

const login = async (req: Request, res: Response) => {
  const user: ILogin = req.body;
  const token = await usersServices.login(user);
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  }
  res.status(StatusCodes.OK).json(token);
};

export default { createUser, login };