import axios from 'axios';

export const getAxiosInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
  });
};
