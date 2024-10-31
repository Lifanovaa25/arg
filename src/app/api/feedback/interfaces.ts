import type { IResponseError } from '../interfaces';

export interface IFeedBackParams {
  name: string;
  phone: string;
  email: string | undefined;
  Itn: string | null;
  file: string | null;
  message: string | undefined;
  token:string
}
export interface IFeedBackResponse200 {
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Description: string;
    Type: string;
  };
  Value: string;
}

export interface IFeedBackResponse400 {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface IFeedBackResponse500 {
  Result: unknown;
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

export type TFeedBackResponse =
  | IFeedBackResponse200
  | IFeedBackResponse400
  | IFeedBackResponse500;
export type IError = IResponseError | IFeedBackResponse400 | IFeedBackResponse500;
