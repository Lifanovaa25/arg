import axios from "axios";

import { IError, IFeedBackParams, TFeedBackResponse } from "./interfaces";

const sendFeedback = async ({ name, phone,email,Itn,file,message }: IFeedBackParams): Promise<TFeedBackResponse | IError> => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/SendFeedback`
  
   
    const response = await axios.post(url,{name,phone,email,file,Itn,message});
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};
const SendVacancyRespond = async ({ name, phone,email,Itn,file,message }: IFeedBackParams): Promise<TFeedBackResponse | IError> => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/SendVacancyRespond`
   
    const response = await axios.post(url,{name,phone,email,file,Itn,message});
    const result = await response.data;

    return result;
  } catch (error: unknown) {
    const err = error as IError;
    console.error(err);
    return err;
  }
};
export  {
  sendFeedback,SendVacancyRespond
};
