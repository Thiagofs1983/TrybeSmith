import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ICreateProducts } from '../interfaces';

const createProduct = async (product: ICreateProducts): Promise<ResultSetHeader> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [product.name, product.amount]);
  return result;
};

export default { createProduct };
