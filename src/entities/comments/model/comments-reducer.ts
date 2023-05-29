import { CLEAR_ERROR_COMMENT_ACTION, SET_COMMENT_ACTIONS, SET_ERROR_COMMENT_ACTION } from 'shared';
import { IComments } from 'types/post';
import { TCommentActions } from '../types/action-types';

interface IInitialState {
  comments: IComments[];
  commentsErrorMessage: string;
}

const initialState: IInitialState = {
  comments: [],
  commentsErrorMessage: '',
};

export const commentReducer = (
  state = initialState,
  action: TCommentActions,
) => {
  switch (action.type) {
    case SET_COMMENT_ACTIONS: return { ...state, comments: action.payload };
    case SET_ERROR_COMMENT_ACTION: return { ...state, commentsErrorMessage: 'Произошла ошибка получения комментариев с сервера' };
    case CLEAR_ERROR_COMMENT_ACTION: return { ...state, commentsErrorMessage: '' };
    default: return state;
  }
};
