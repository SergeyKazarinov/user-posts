import {
  SET_PAGINATION_NUMBER, SET_PAGINATION_POST, SET_POSTS_ACTIONS, getPaginationPost,
} from 'shared';
import { IPost } from 'types/post';

interface IInitialState {
  posts: IPost[];
  paginationPost: IPost[];
  paginationNumber: number;
}

const initialState: IInitialState = {
  posts: [],
  paginationPost: [],
  paginationNumber: 1,
};

export const postsReducer = (
  state = initialState,
  { type, payload }: { type: string, payload: any },
) => {
  switch (type) {
    case SET_POSTS_ACTIONS: return { ...state, posts: payload };
    case SET_PAGINATION_POST: return {
      ...state,
      paginationPost: getPaginationPost(state.posts, state.paginationNumber),
    };
    case SET_PAGINATION_NUMBER: return { ...state, paginationNumber: payload };
    default: return state;
  }
};
