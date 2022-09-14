import { StatusCodes } from 'http-status-codes';
import { ICreateUser, ILogin, IToken } from '../interfaces';
import usersModel from '../models/users.model';
import HttpExeption from '../shared/http.exeption';
import generateToken from '../utils/generateToken';

const createUser = async (user: ICreateUser): Promise<IToken> => {
  await usersModel.createUser(user);
  const token = generateToken(user.username);
  return { token };
};

const login = async (user: ILogin): Promise<IToken> => {
  const result = await usersModel.login(user);
  if (!result) throw new HttpExeption(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
  const payload = `${result.insertId} | ${user.username}`;
  const token = generateToken(payload);
  return { token };
}

export default { createUser, login };