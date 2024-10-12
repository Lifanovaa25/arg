import type { IResponseError } from '../interfaces';

export interface IPageCartsRequestParams {
  PageId: number;
  cartItems: object[];
}

export interface ICartRequestParams {
  Id: number;
  Count: number;
}

export interface ICartResponse200 {
  Value: {
    items: [];
  };
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Description: string;
    Type: string;
  };
}

export interface ICartsResponse400 {
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
