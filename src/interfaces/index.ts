export interface ICreateProducts {
  name: string;
  amount: string;
}

export interface INewProduct extends ICreateProducts {
  id: number;
}

export interface Product extends INewProduct {
  orderId: number | null;
}