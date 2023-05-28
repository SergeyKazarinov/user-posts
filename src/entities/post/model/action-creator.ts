import {
  GET_ALL_COMMENT_ACTIONS,
  GET_POSTS_ACTIONS,
  SEARCH_POSTS_ACTIONS,
  SET_PAGINATION_NUMBER,
  SET_PAGINATION_POST,
  SET_POSTS_ACTIONS,
  SORT_POSTS_ACTIONS,
  SORT_VALUE_ACTIONS,
} from 'shared';
import { IPost, TSortValues } from 'types/post';

export const getPostsActionCreator = () => ({
  type: GET_POSTS_ACTIONS,
});

export const setPostsActionCreator = (posts: IPost[]) => ({
  type: SET_POSTS_ACTIONS,
  posts,
});

export const getAllCommentsActionCreator = () => ({
  type: GET_ALL_COMMENT_ACTIONS,
});

export const setPaginationPostsActionCreator = (posts: IPost[], number: number) => ({
  type: SET_PAGINATION_POST,
  posts,
  number,
});

export const setPaginationNumberActionCreator = (number: number) => ({
  type: SET_PAGINATION_NUMBER,
  number,
});

export const searchPostActionCreator = (value: string) => ({
  type: SEARCH_POSTS_ACTIONS,
  value,
});

export const sortValueActionCreator = (sortValue: TSortValues) => ({
  type: SORT_VALUE_ACTIONS,
  sortValue,
});

export const sortPostActionCreator = (value: string) => ({
  type: SORT_POSTS_ACTIONS,
  value,
});
