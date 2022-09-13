import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ICreateProducts, IProduct } from '../interfaces';

const createProduct = async (product: ICreateProducts): Promise<ResultSetHeader> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [product.name, product.amount]);
  return result;
};

const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute(query);
  return result as IProduct[];
};

export default { createProduct, getAll };
