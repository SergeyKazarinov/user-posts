import {
  DEFAULT,
  SEARCH_POSTS_ACTIONS,
  SET_PAGINATION_NUMBER,
  SET_PAGINATION_POST,
  SET_POSTS_ACTIONS,
  SORT_POSTS_ACTIONS,
  SORT_VALUE_ACTIONS,
  filterPosts,
  getPaginationPost,
  sortElements,
} from 'shared';
import {
  IPost, TSortValues,
} from 'types/post';
import { TPostActions } from '../types/action-types';

interface IInitialState {
  posts: IPost[];
  searchedPosts: IPost[]
  paginationPost: IPost[];
  sortedPosts: IPost[];
  paginationNumber: number;
  sortValue: TSortValues;
}

const initialState: IInitialState = {
  posts: [],
  searchedPosts: [],
  paginationPost: [],
  sortedPosts: [],
  paginationNumber: 1,
  sortValue: DEFAULT,
};

export const postsReducer = (
  state = initialState,
  action: TPostActions,
): IInitialState => {
  switch (action.type) {
    case SET_POSTS_ACTIONS: return {
      ...state, posts: action.posts, searchedPosts: action.posts, sortedPosts: action.posts,
    };

    case SET_PAGINATION_POST: return {
      ...state,
      paginationPost: getPaginationPost(action.posts, action.number),
    };

    case SET_PAGINATION_NUMBER: return { ...state, paginationNumber: action.number };

    case SEARCH_POSTS_ACTIONS: {
      if (action.value === '') {
        return { ...state, searchedPosts: state.posts };
      }
      return { ...state, searchedPosts: filterPosts<IPost>(state.posts, action.value, 'title') }; }

    case SORT_VALUE_ACTIONS: {
      return { ...state, sortValue: action.sortValue };
    }

    case SORT_POSTS_ACTIONS: {
      const { searchedPosts } = state;

      if (action.value === DEFAULT) {
        return { ...state, sortedPosts: searchedPosts };
      }
      const newArr = sortElements<IPost>(searchedPosts, action.value, 'title');
      return { ...state, sortedPosts: newArr };
    }
    default: return state;
  }
};
