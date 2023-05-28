import {
  GET_POSTS_ACTIONS,
  SET_POSTS_ACTIONS,
  GET_ALL_COMMENT_ACTIONS,
  SET_PAGINATION_POST,
  SET_PAGINATION_NUMBER,
  SEARCH_POSTS_ACTIONS,
  SORT_VALUE_ACTIONS,
  SORT_POSTS_ACTIONS,
} from 'shared';
import { IPost, TSortValues } from 'types/post';

export interface IGetPostsActionCreator {
  readonly type: typeof GET_POSTS_ACTIONS
}

export interface ISetPostsActionCreator {
  readonly type: typeof SET_POSTS_ACTIONS
  posts: IPost[]
}

export interface IGetAllCommentsActionCreator {
  readonly type: typeof GET_ALL_COMMENT_ACTIONS
}

export interface ISetPaginationPostsActionCreator {
  readonly type: typeof SET_PAGINATION_POST;
  posts: IPost[];
  number: number;
}

export interface ISetPaginationNumberActionCreator {
  readonly type: typeof SET_PAGINATION_NUMBER;
  number: number;
}

export interface ISearchPostActionCreator {
  readonly type: typeof SEARCH_POSTS_ACTIONS;
  value: string;
}

export interface ISortValueActionCreator {
  readonly type: typeof SORT_VALUE_ACTIONS;
  sortValue: TSortValues;
}

export interface ISortPostActionCreator {
  readonly type: typeof SORT_POSTS_ACTIONS;
  value: TSortValues;
}

export type TPostActions =
  | IGetPostsActionCreator
  | ISetPostsActionCreator
  | IGetAllCommentsActionCreator
  | ISetPaginationPostsActionCreator
  | ISetPaginationNumberActionCreator
  | ISearchPostActionCreator
  | ISortValueActionCreator
  | ISortPostActionCreator;
