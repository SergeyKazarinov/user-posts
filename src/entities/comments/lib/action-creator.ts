import {
  CLEAR_ERROR_COMMENT_ACTION,
  GET_ALL_COMMENT_ACTIONS,
  SET_COMMENT_ACTIONS,
  SET_ERROR_COMMENT_ACTION,
} from 'shared';
import { IComments } from 'types/post';
import {
  IClearCommentErrorActionCreator,
  IGetAllCommentsActionCreator,
  ISetCommentActionCreator,
  ISetCommentErrorActionCreator,
} from '../types/action-types';

export const getAllCommentsActionCreator = (): IGetAllCommentsActionCreator => ({
  type: GET_ALL_COMMENT_ACTIONS,
});

export const setCommentActionCreator = (data: IComments[]): ISetCommentActionCreator => ({
  type: SET_COMMENT_ACTIONS,
  payload: data,
});

export const setCommentErrorActionCreator = (): ISetCommentErrorActionCreator => ({
  type: SET_ERROR_COMMENT_ACTION,
});

export const clearCommentErrorActionCreator = (): IClearCommentErrorActionCreator => ({
  type: CLEAR_ERROR_COMMENT_ACTION,
});
