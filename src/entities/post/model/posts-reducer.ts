import { SET_POSTS_ACTIONS } from 'shared';
import { IPost } from 'types/post';

interface IInitialState {
  posts: IPost[];
}

const initialState: IInitialState = {
  posts: [],
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
