import type { IResponseError } from "../interfaces";

export interface ISearchRequestParams {
  SearchString: string;
  Page: number;
  PageSize: string;
}

export interface ISearchResponse2numbernumber {
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Description: string;
    Type: string;
  };
  value: {
    items: {
      Id: number;
      Image: string;
      Label: string;
      Price: number;
      Props: string[][];
      Link: string;
      ToCart: boolean;
      Articul: string;
      Parts: boolean;
    }[];
    ItemsTotal: number;
    PartsTotal: number;
  };
}

export interface ISearchResponse4numbernumber {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface ISearchResponse5numbernumber {
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

export type TSearchResponse = ISearchResponse2numbernumber | ISearchResponse4numbernumber | ISearchResponse5numbernumber;
export type IError = IResponseError | ISearchResponse4numbernumber | ISearchResponse5numbernumber;
