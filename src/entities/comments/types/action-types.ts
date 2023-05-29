import {
  CLEAR_ERROR_COMMENT_ACTION,
  GET_ALL_COMMENT_ACTIONS,
  SET_COMMENT_ACTIONS,
  SET_ERROR_COMMENT_ACTION,
} from 'shared';
import { IComments } from 'types/post';

export interface IGetAllCommentsActionCreator {
  readonly type: typeof GET_ALL_COMMENT_ACTIONS;
}

export interface ISetCommentActionCreator {
  readonly type: typeof SET_COMMENT_ACTIONS;
  payload: IComments[];
}

export interface ISetCommentErrorActionCreator {
  readonly type: typeof SET_ERROR_COMMENT_ACTION;
}

export interface IClearCommentErrorActionCreator {
  readonly type: typeof CLEAR_ERROR_COMMENT_ACTION;
}

export type TCommentActions =
  | IGetAllCommentsActionCreator
  | ISetCommentActionCreator
  | ISetCommentErrorActionCreator
  | IClearCommentErrorActionCreator;
