import { GET_ALL_COMMENT_ACTIONS, SET_COMMENT_ACTIONS } from 'shared';
import { IComments } from 'types/post';

export const getAllCommentsActionCreator = () => ({
  type: GET_ALL_COMMENT_ACTIONS,
});

// export const getCommentByPostId = (postId: number) => ({
//   type: GET_COMMENT_BY_POST_ID,
//   payload: postId,
// });

export const setCommentActionCreator = (data: IComments[]) => ({
  type: SET_COMMENT_ACTIONS,
  payload: data,
});
