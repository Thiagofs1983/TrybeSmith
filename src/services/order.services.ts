import { IOrder } from '../interfaces';
import orderModel from '../models/order.model';

const getAll = async (): Promise<IOrder[]> => {
  const result = await orderModel.getAll();
  return result;
};

export default { getAll };