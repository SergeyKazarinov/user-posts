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
  {
    type, posts, number, value, sortValue,
  }: any,
) => {
  switch (type) {
    case SET_POSTS_ACTIONS: return {
      ...state, posts, searchedPosts: posts, sortedPosts: posts,
    };

    case SET_PAGINATION_POST: return {
      ...state,
      paginationPost: getPaginationPost(posts, number),
    };

    case SET_PAGINATION_NUMBER: return { ...state, paginationNumber: number };

    case SEARCH_POSTS_ACTIONS: {
      if (value === '') {
        return { ...state, searchedPosts: state.posts };
      }
      return { ...state, searchedPosts: filterPosts<IPost>(state.posts, value, 'title') }; }

    case SORT_VALUE_ACTIONS: {
      return { ...state, sortValue };
    }

    case SORT_POSTS_ACTIONS: {
      const { searchedPosts } = state;

      if (value === DEFAULT) {
        return { ...state, sortedPosts: searchedPosts };
      }
      const newArr = sortElements<IPost>(searchedPosts, value, 'title');
      return { ...state, sortedPosts: newArr };
    }
    default: return state;
  }
};
