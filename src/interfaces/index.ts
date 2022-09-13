export interface ICreateProducts {
  name: string;
  amount: string;
}

export interface INewProduct extends ICreateProducts {
  id: number;
}

export interface IProduct extends INewProduct {
  orderId: number | null;
}

export interface ICreateUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IJwtOptions {
  algorithm: string;
  expiresIn: string;
}