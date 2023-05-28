import { GET_ALL_COMMENT_ACTIONS, SET_COMMENT_ACTIONS } from 'shared';
import { IComments } from 'types/post';

export interface IGetAllCommentsActionCreator {
  readonly type: typeof GET_ALL_COMMENT_ACTIONS;
}

export interface ISetCommentActionCreator {
  readonly type: typeof SET_COMMENT_ACTIONS;
  payload: IComments[];
}

export type TCommentActions =
  | IGetAllCommentsActionCreator
  | ISetCommentActionCreator;
