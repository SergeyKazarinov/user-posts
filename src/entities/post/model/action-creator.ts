import {
  GET_ALL_COMMENT_ACTIONS,
  GET_POSTS_ACTIONS,
  SEARCH_POSTS_ACTIONS,
  SET_PAGINATION_NUMBER,
  SET_PAGINATION_POST,
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

export const setPaginationPostsActionCreator = () => ({
  type: SET_PAGINATION_POST,
});

export const setPaginationNumberActionCreator = (number: number) => ({
  type: SET_PAGINATION_NUMBER,
  payload: number,
});

export const searchPostActionCreator = (value: string) => ({
  type: SEARCH_POSTS_ACTIONS,
  payload: value,
});
