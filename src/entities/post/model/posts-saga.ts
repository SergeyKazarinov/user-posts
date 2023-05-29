import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_POSTS_ACTIONS, GET_POST_BY_USER_ID, getPosts, getPostsByUserId,
} from 'shared';
import { IPost } from 'types/post';
import { setPostsActionCreator } from '../lib/action-creator';
import { IGetPostsByUserIdActionCreator } from '../types/action-types';

function* handleGetPosts() {
  const data: IPost[] = yield getPosts();
  yield put(setPostsActionCreator(data));
}

function* handleGetPostsByUserId({ userId }: IGetPostsByUserIdActionCreator) {
  const data: IPost[] = yield getPostsByUserId(userId);
  yield put(setPostsActionCreator(data));
}

function* watchGetPostSaga() {
  yield takeEvery(GET_POSTS_ACTIONS, handleGetPosts);
  yield takeEvery(GET_POST_BY_USER_ID, handleGetPostsByUserId);
}

export default watchGetPostSaga;
