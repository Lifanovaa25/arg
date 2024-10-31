import type { IResponseError } from "../interfaces";

export interface IMainMenuResponse200 {
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Description: string;
    Type: string;
  };
  Value: {
    CatalogTabName: string;
    MainMenu: {
      CategoryName: string;
      CategoryUrl: string;
      Types: {
        TypeName: string;
        TypeUrl: string;
      }[];
    }[];
  }[];
}

export interface IMainMenuResponse400 {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface IMainMenuResponse500 {
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

export type TMainMenuResponse = IMainMenuResponse200 | IMainMenuResponse400 | IMainMenuResponse500;
export type IError = IResponseError | IMainMenuResponse400 | IMainMenuResponse500;
