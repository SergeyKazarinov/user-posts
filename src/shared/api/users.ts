import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from 'shared';

export const getUsersById = async (userId: string) => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/users/${userId}`);
    return res.data;
  } catch (error: any) {
    if (error.response) {
      return console.log(error.response);
    } if (error.request) {
      return console.log(error.request);
    }
    return console.log('Error', error.message);
  }
};
