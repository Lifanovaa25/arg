import axios from 'axios';

export const getContentTypeHeader = () => {
  return {
    'Content-Type': 'application/json',
  };
};

export const axiosClassic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: getContentTypeHeader(),
});
