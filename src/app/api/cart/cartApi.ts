import axios from 'axios';

import {
  ICartRequestParams,
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
      if (item.id != undefined) {
        url = `${url}cartIds=${item.id}&`;
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
