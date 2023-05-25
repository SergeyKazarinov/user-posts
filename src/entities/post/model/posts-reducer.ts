import { SET_COMMENT_ACTIONS, SET_POSTS_ACTIONS } from 'shared';
import { IComments, IPost } from 'types/post';

interface IInitialState {
  posts: IPost[];
  comments: IComments[]
}

const initialState: IInitialState = {
  posts: [],
  comments: [],
};

export const postsReducer = (
  state = initialState,
  { type, payload }: { type: string, payload: IPost[] },
) => {
  switch (type) {
    case SET_POSTS_ACTIONS: return { ...state, posts: payload };
    default: return state;
  }
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
