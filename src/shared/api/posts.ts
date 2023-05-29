import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from 'shared';

export const getPosts = async () => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/posts`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPostsByUserId = async (userId: string) => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
    return res.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const getAllComments = async () => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/comments`);
    return res.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
