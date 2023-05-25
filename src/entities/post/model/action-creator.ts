import {
  GET_ALL_COMMENT_ACTIONS,
  GET_COMMENT_BY_POST_ID, GET_POSTS_ACTIONS, SET_COMMENT_ACTIONS, SET_POSTS_ACTIONS,
} from 'shared';
import { IComments, IPost } from 'types/post';

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

export const getCommentByPostId = (postId: number) => ({
  type: GET_COMMENT_BY_POST_ID,
  payload: postId,
});

export const getCommentActionCreator = (postId: number) => ({
  type: GET_COMMENT_BY_POST_ID,
  payload: postId,
});

export const setCommentActionCreator = (data: IComments[]) => ({
  type: SET_COMMENT_ACTIONS,
  payload: data,
});
