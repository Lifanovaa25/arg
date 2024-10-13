import type { IResponseError } from "../interfaces";

export interface IPageProductsRequestParams {
  PageUrl: string;
  Page: number;
  PageSize: number;
  Params?: object[];
  Sort: number;
}

export interface IProductRequestParams {
  id?: string | number;
  Slug?: string;
}

export interface IPageProductsResponse200 {
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Description: string;
    Type: string;
  };
  value: {
    Category: {
      Label: string ;
      Title: string;
      Link: string;
      TitleToEnd: boolean;
      Items: {
        Id: number;
        Link: string;
        Label: string;
        Title: string;
      }[];
    };
    Filters: {
      Name: string;
      Label: string;
      AllItems: string;
      Radio: boolean;
      HideAfter: boolean;
      Ignore: boolean;
      Items: {
        Id: 0;
        Link: string;
        Label: string;
        Title: string;
      }[];
    }[];
    Items: {
      Id: 0;
      Image: string;
      Label: string;
      Price: number;
      Props: string[][];
      Link: string;
      ToCart: boolean;
      Articul: string;
    }[];
    TotalPages: number;
    AboutManufacturer: {
      Title: string;
      Text: string;
      PersonImg: string;
      PersonName: string;
      PersonPost: string;
    };
  };
}
export interface Product {
  value: {
    category: {
      label: string ;
      title: string;
      link: string;
      titleToEnd: boolean;
      items: {
        Id: number;
        Link: string;
        Label: string;
        Title: string;
      }[];
    };
    filters: {
      Name: string;
      Label: string;
      AllItems: string;
      Radio: boolean;
      HideAfter: boolean;
      Ignore: boolean;
      Items: {
        Id: 0;
        Link: string;
        Label: string;
        Title: string;
      }[];
    }[];
    items: {
      id: 0;
      image: string;
      label: string;
      price: number;
      props: string[][];
      link: string;
      toCart: boolean;
      articul: string;
    }[];
    totalPages: number;
    aboutManufacturer: {
      title: string;
      text: string;
      personImg: string;
      personName: string;
      personPost: string;
    };
  };
}
export interface IProductResponse200 {
  IsSuccess: boolean;
  IsFailure: boolean;
  Error: {
    Code: string;
    Description: string;
    Type: string;
  };
  Value: {
    Label: string;
    ImageUrl: string | undefined;
    Articul: string;
    Country: string;
    Analogue: string;
    Filters: {
      additionalProp1: string[];
      additionalProp2: string[];
      additionalProp3: string[];
    };
    Price: number;
    ProductDescription: string;
    Characteristics: string;
    LinkUrl: string;
    LinkName: string;
    IsExternalLink: boolean;
    SparePartsLists: {
      Title: string;
      Items: {
        Name: string;
        Price: number;
        Articul: string;
        Url: string;
      }[];
    }[];
  };
}

export interface IProductsResponse400 {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface IProductsResponse500 {
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

export type TPageProductsResponse =Product| IPageProductsResponse200 | IProductsResponse400 | IProductsResponse500;
export type IError = IResponseError | IProductsResponse400 | IProductsResponse500;
