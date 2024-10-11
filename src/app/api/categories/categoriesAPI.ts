import axios from "axios";

import {
  ICategoriesRequestParams,
  TCategoriesResponse,
  IError
} from "./interfaces";

const getCategory = async ({ id, Slug }: ICategoriesRequestParams): Promise<TCategoriesResponse | IError> => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/GetCategory?Slug=${Slug}/`;

    if (id) {
      url = `${url}&id=${id}`;
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

export  {
  getCategory
};
