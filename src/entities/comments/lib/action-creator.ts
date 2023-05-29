import { GET_ALL_COMMENT_ACTIONS, SET_COMMENT_ACTIONS } from 'shared';
import { IComments } from 'types/post';
import { IGetAllCommentsActionCreator, ISetCommentActionCreator } from '../types/action-types';

export const getAllCommentsActionCreator = (): IGetAllCommentsActionCreator => ({
  type: GET_ALL_COMMENT_ACTIONS,
});

// export const getCommentByPostId = (postId: number) => ({
//   type: GET_COMMENT_BY_POST_ID,
//   payload: postId,
// });

export const setCommentActionCreator = (data: IComments[]): ISetCommentActionCreator => ({
  type: SET_COMMENT_ACTIONS,
  payload: data,
});
