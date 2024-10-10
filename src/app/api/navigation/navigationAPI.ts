import axios from "axios";

import {
  TMainMenuResponse,
  IError
} from "./interfaces";

const getMainMenuItems = async (): Promise<TMainMenuResponse | IError> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/GetMenuItems`);
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};

export  {
  getMainMenuItems
};
