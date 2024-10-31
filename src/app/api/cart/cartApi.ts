import axios from 'axios';

import {
  ICartRequestParams,
  ICartResponse200,
  IError,
  IPageCartsRequestParams,
  TPageCartsResponse,
} from './interfaces';

const getCart = async ({
  Id,
}: ICartRequestParams): Promise<TPageCartsResponse | IError> => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/GetCart?`;
  
    Id.forEach((item) => {
      if (item != undefined) {
        url = `${url}cartIds=${item}&`;
      }
   

    });
    const response = await axios.get(url);
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};

export { getCart };
