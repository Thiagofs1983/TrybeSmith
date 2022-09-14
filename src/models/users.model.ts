import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ICreateUser, ILogin, ILoginSucess } from '../interfaces';

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

const login = async (user: ILogin): Promise<ILoginSucess[]> => {
  const { username, password } = user;
  const query = `
  SELECT * FROM Trybesmith.Users
  WHERE username = ? AND password = ?`;
  const [result] = await connection.execute(query, [username, password]);
  return result as ILoginSucess[];
};

export default { createUser, login };