import type { IResponseError } from '../interfaces';

export interface IPageCartsRequestParams {
  PageId: number;
  cartItems: object[];
}

export interface ICartRequestParams {
  Id:number[];
}

export interface ICartItem {
  id: number,
  image: string,
  label: string,
  price: number,
  props: string[][],
  link: string,
  toCart: true,
  articul: string,
  amount: number
}

export interface ICartResponse200 {
  value: {
    items: ICartItem[];
  };
  isSuccess: boolean;
  isFailure: boolean;
  error: {
    code: string;
    description: string;
    type: string;
  };
}

export interface ICartsResponse400 {
  value: {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
}

export interface ICartsResponse500 {
  Result: {};
  Value: {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
}

export type TPageCartsResponse = ICartsResponse400 | ICartsResponse500;
export type IError = IResponseError | ICartsResponse400 | ICartsResponse500;
