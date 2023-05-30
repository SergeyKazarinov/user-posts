import { AxiosResponse } from 'axios';
import { jsonPlaceholder } from './config';

export const getPosts = async () => {
  try {
    const res: AxiosResponse = await jsonPlaceholder('/posts');
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPostsByUserId = async (userId: string) => {
  try {
    const res: AxiosResponse = await jsonPlaceholder(`/posts?userId=${userId}`);
    return res.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const getAllComments = async () => {
  try {
    const res: AxiosResponse = await jsonPlaceholder('/comments');
    return res.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
