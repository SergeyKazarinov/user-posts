import {
  SEARCH_POSTS_ACTIONS,
  SET_PAGINATION_NUMBER, SET_PAGINATION_POST, SET_POSTS_ACTIONS, filterPosts, getPaginationPost,
} from 'shared';
import { IPost } from 'types/post';

interface IInitialState {
  posts: IPost[];
  searchedPosts: IPost[]
  paginationPost: IPost[];
  paginationNumber: number;
}

const initialState: IInitialState = {
  posts: [],
  searchedPosts: [],
  paginationPost: [],
  paginationNumber: 1,
};

export const postsReducer = (
  state = initialState,
  { type, payload }: { type: string, payload: any },
) => {
  switch (type) {
    case SET_POSTS_ACTIONS: return { ...state, posts: payload, searchedPosts: payload };
    case SET_PAGINATION_POST: return {
      ...state,
      paginationPost: getPaginationPost(state.searchedPosts, state.paginationNumber),
    };
    case SET_PAGINATION_NUMBER: return { ...state, paginationNumber: payload };
    case SEARCH_POSTS_ACTIONS: {
      if (payload === '') {
        return { ...state, searchedPosts: state.posts };
      }
      return { ...state, searchedPosts: filterPosts(state.posts, payload) }; }
    default: return state;
  }
};
