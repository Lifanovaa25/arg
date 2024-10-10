import axios from "axios";

import {
  ISearchRequestParams,
  TSearchResponse,
  IError
} from "./interfaces";

const getSearchResults = async ({ Page, PageSize, SearchString }: ISearchRequestParams): Promise<TSearchResponse | IError> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/GetCategory?Page=${Page}&PageSize=${PageSize}&SearchString=${SearchString}`;
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
  getSearchResults
};
