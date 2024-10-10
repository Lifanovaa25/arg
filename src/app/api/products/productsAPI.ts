import axios from "axios";

import {
  IPageProductsRequestParams,
  IProductRequestParams,
  TPageProductsResponse,
  IError
} from "./interfaces";

const getPageProductsItems = async ({
  Page,
  PageSize,
  PageUrl,
  Params,
  Sort
}: IPageProductsRequestParams): Promise<TPageProductsResponse | IError> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/GetMenuItems
    ?Page=${Page}
    &PageSize=${PageSize}
    &PageUrl=${PageUrl}
    &Params=${JSON.stringify(Params)}
    &Sort=${Sort}`;

    const response = await axios.get(url);
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};

const getProduct = async ({ id, Slug }: IProductRequestParams): Promise<TPageProductsResponse | IError> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/GetProduct?id=${id}&Slug=${Slug}`);
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};

export  {
  getPageProductsItems,
  getProduct
};
