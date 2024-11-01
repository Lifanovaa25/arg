import axios from 'axios';

import {
  IPageProductsRequestParams,
  IProductRequestParams,
  TPageProductsResponse,
  IError,
} from './interfaces';

const getPageProductsItems = async ({
  Page,
  PageSize,
  PageUrl,
  Params,
  Sort,
}: IPageProductsRequestParams): Promise<TPageProductsResponse | IError> => {
  try {
    if (PageUrl[PageUrl.length - 1] != '/') {
      PageUrl = `${PageUrl}/`;
    }
    let url = `${process.env.NEXT_PUBLIC_API_URL}/GetPageWithProducts?Page=${Page}&PageSize=${PageSize}&PageUrl=${PageUrl}&Sort=${Sort}`;
    if (Params !== undefined) {
      url = `${url}&Params=${Params}`;
    
    }
    const response = await axios.get(url);
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};

const getProduct = async ({
  id,
  Slug,
}: IProductRequestParams): Promise<TPageProductsResponse | IError> => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/GetProduct?`;

    if (id) {
      url = `${url}&id=${id}`;
    }
    if (Slug) {
      url = `${url}&Slug=${Slug}/`;
    }
    const response = await axios.get(url);
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};

export { getPageProductsItems, getProduct };
