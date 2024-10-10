import type { IResponseError } from "../interfaces";

export interface ICategoriesRequestParams {
  id?: number;
  Slug: string;
}

export interface ICategoriesResponse200 {
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Description: string;
    Type: string;
  };
  Value: {
    Label: string;
    Text: string;
    Subcategories: {
      Name: string;
      Url: string;
      Image: string;
    }[];
  };
}

export interface ICategoriesResponse400 {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface ICategoriesResponse500 {
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

export type TCategoriesResponse = ICategoriesResponse200 | ICategoriesResponse400 | ICategoriesResponse500;
export type IError = IResponseError | ICategoriesResponse400 | ICategoriesResponse500;