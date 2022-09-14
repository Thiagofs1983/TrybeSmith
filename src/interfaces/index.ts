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

export interface ILogin {
  username: string;
  password: string;
}

export interface ICreateUser extends ILogin {
  classe: string;
  level: number;
}

export interface ILoginSucess extends ICreateUser {
  id: number;
}
export interface IToken {
  token: string;
}

export interface IOrder {
  id: number;
  userId: number;
  productsId: number[];
}
