import productsModel from '../models/products.model';
import { ICreateProducts, INewProduct } from '../interfaces';

const createProduct = async (newProduct: ICreateProducts) => {
  const { insertId } = await productsModel.createProduct(newProduct);
  const result: INewProduct = {
    ...newProduct,
    id: insertId,
  };
  return result;
};

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

export default { createProduct, getAll };