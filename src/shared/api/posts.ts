import axios, { AxiosResponse } from 'axios';
import { GET_COMMENTS, GET_POSTS } from 'shared';

export const getPosts = async () => {
  try {
    const res: AxiosResponse = await axios.get(GET_POSTS);
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

export const getComments = async () => {
  try {
    const res: AxiosResponse = await axios.get(GET_COMMENTS);
    return res.data();
  } catch (error: any) {
    if (error.response) {
      return console.log(error.response);
    } if (error.request) {
      return console.log(error.request);
    }
    return console.log('Error', error.message);
  }
};
