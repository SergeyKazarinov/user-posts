import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from 'shared';

export const getUsersById = async (userId: string) => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/users/${userId}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
