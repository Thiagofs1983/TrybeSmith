export interface ICreateProducts {
  name: string;
  amount: string;
}

export interface INewProduct extends ICreateProducts {
  id: number;
}