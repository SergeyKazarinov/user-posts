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
import {
  IGetPostsActionCreator,
  ISetPostsActionCreator,
  IGetAllCommentsActionCreator,
  ISetPaginationPostsActionCreator,
  ISetPaginationNumberActionCreator,
  ISortValueActionCreator,
  ISortPostActionCreator,
  ISearchPostActionCreator,
} from '../types/action-types';

export const getPostsActionCreator = (): IGetPostsActionCreator => ({
  type: GET_POSTS_ACTIONS,
});

export const setPostsActionCreator = (posts: IPost[]): ISetPostsActionCreator => ({
  type: SET_POSTS_ACTIONS,
  posts,
});

export const getAllCommentsActionCreator = (): IGetAllCommentsActionCreator => ({
  type: GET_ALL_COMMENT_ACTIONS,
});

export const setPaginationPostsActionCreator = (
  posts: IPost[],
  number: number,
): ISetPaginationPostsActionCreator => ({
  type: SET_PAGINATION_POST,
  posts,
  number,
});

export const setPaginationNumberActionCreator = (
  number: number,
): ISetPaginationNumberActionCreator => ({
  type: SET_PAGINATION_NUMBER,
  number,
});

export const searchPostActionCreator = (value: string): ISearchPostActionCreator => ({
  type: SEARCH_POSTS_ACTIONS,
  value,
});

export const sortValueActionCreator = (sortValue: TSortValues): ISortValueActionCreator => ({
  type: SORT_VALUE_ACTIONS,
  sortValue,
});

export const sortPostActionCreator = (value: TSortValues): ISortPostActionCreator => ({
  type: SORT_POSTS_ACTIONS,
  value,
});
