import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from 'shared';

export const getPosts = async () => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/posts`);
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

export const getPostsByUserId = async (userId: string) => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
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

export const getAllComments = async () => {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/comments`);
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

// export const getCommentsByPostId = async (postId: string) => {
//   try {
//     const res: AxiosResponse = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
//     return res.data;
//   } catch (error: any) {
//     if (error.response) {
//       return console.log(error.response);
//     } if (error.request) {
//       return console.log(error.request);
//     }
//     return console.log('Error', error.message);
//   }
// };
