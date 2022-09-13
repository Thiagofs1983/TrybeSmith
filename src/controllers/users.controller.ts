import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICreateUser } from '../interfaces';
import usersServices from '../services/users.services';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const user: ICreateUser = req.body;
  const token = await usersServices.createUser(user);
  res.status(StatusCodes.CREATED).json(token);
};

export default { createUser };