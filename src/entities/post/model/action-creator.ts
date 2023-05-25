import {
  GET_ALL_COMMENT_ACTIONS,
  GET_POSTS_ACTIONS,
  SET_POSTS_ACTIONS,
} from 'shared';
import { IPost } from 'types/post';

export const getPostsActionCreator = () => ({
  type: GET_POSTS_ACTIONS,
});

export const setPostsActionCreator = (data: IPost[]) => ({
  type: SET_POSTS_ACTIONS,
  payload: data,
});

export const getAllCommentsActionCreator = () => ({
  type: GET_ALL_COMMENT_ACTIONS,
});
