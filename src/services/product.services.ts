import productsModel from '../models/products.model';
import { ICreateProducts, INewProduct, IProduct } from '../interfaces';

const createProduct = async (newProduct: ICreateProducts): Promise<INewProduct> => {
  const { insertId } = await productsModel.createProduct(newProduct);
  const result: INewProduct = {
    ...newProduct,
    id: insertId,
  };
  return result;
};

const getAll = async (): Promise<IProduct[]> => {
  const result = await productsModel.getAll();
  return result;
};

export default { createProduct, getAll };