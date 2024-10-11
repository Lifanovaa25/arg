import axios from "axios";

import {

  ICartRequestParams,
  IError,
  IPageCartsRequestParams,
  TPageCartsResponse
} from "./interfaces";



const getCart = async ({ cartItems,PageId }: ICartRequestParams, ): Promise<TPageCartsResponse | IError> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/GetCart?CartItems={${cartItems}}}&PageId=${PageId}`);
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};

export  {
  getCart
};
