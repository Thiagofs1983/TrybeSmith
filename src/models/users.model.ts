import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ICreateUser } from '../interfaces';

const createUser = async (user: ICreateUser): Promise<ResultSetHeader> => {
  const query = `
  INSERT INTO 
    Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  const { username, classe, level, password } = user;
  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  return result;
};

export default { createUser };