import connection from './connection';
import { IOrder } from '../interfaces';

const getAll = async (): Promise<IOrder[]> => {
  // JSON_ARRAYAGG = https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
  const query = `
  SELECT 
O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
  FROM 
Trybesmith.Orders AS O
  INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
  GROUP BY O.id;`;
  const [result] = await connection.execute(query);
  return result as IOrder[];
};

export default { getAll };