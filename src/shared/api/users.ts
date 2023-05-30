import { AxiosResponse } from 'axios';
import { jsonPlaceholder } from './config';

export const getUsersById = async (userId: string) => {
  try {
    const res: AxiosResponse = await jsonPlaceholder(`/users/${userId}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
