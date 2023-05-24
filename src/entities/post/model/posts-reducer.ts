import { SET_POSTS_ACTIONS } from 'shared';
import { IPost } from 'types/post';

const initialState = {
  posts: [],
};

const setPostsReducer = (
  state: { posts: IPost[] } = initialState,
  { type, payload }: { type: string, payload: IPost[] },
) => {
  switch (type) {
    case SET_POSTS_ACTIONS: return { ...state, posts: payload };
    default: return state;
  }
};

export default setPostsReducer;
