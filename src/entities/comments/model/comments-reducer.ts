import { SET_COMMENT_ACTIONS } from 'shared';
import { IComments } from 'types/post';
import { TCommentActions } from '../types/action-types';

interface IInitialState {
  comments: IComments[]
}

const initialState: IInitialState = {
  comments: [],
};

export const commentReducer = (
  state = initialState,
  action: TCommentActions,
) => {
  switch (action.type) {
    case SET_COMMENT_ACTIONS: return { ...state, comments: action.payload };
    default: return state;
  }
};
