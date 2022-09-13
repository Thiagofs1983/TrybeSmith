import { ICreateUser, IToken } from '../interfaces';
import usersModel from '../models/users.model';
import generateToken from '../utils/generateToken';

const createUser = async (user: ICreateUser): Promise<IToken> => {
  await usersModel.createUser(user);
  const token = generateToken(user.username);
  return { token };
};

export default { createUser };