import { SET_COMMENT_ACTIONS } from 'shared';
import { IComments } from 'types/post';

interface IInitialState {
  comments: IComments[]
}

const initialState: IInitialState = {
  comments: [],
};

export const commentReducer = (
  state = initialState,
  { type, payload }: { type: string, payload: IComments[] },
) => {
  switch (type) {
    case SET_COMMENT_ACTIONS: return { ...state, comments: payload };
    default: return state;
  }
};
