import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_POSTS_ACTIONS, GET_POST_BY_USER_ID, getPosts, getPostsByUserId,
} from 'shared';
import { IPost } from 'types/post';
import { setErrorActionCreator } from 'entities/errors';
import { AxiosError } from 'axios';
import { setPostsActionCreator } from '../lib/action-creator';
import { IGetPostsByUserIdActionCreator } from '../types/action-types';

function* handleGetPosts() {
  try {
    const data: IPost[] = yield getPosts();
    yield put(setPostsActionCreator(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      yield put(setErrorActionCreator());
    }
  }
}

function* handleGetPostsByUserId({ userId }: IGetPostsByUserIdActionCreator) {
  try {
    const data: IPost[] = yield getPostsByUserId(userId);
    yield put(setPostsActionCreator(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      yield put(setErrorActionCreator());
    }
  }
}

function* watchGetPostSaga() {
  yield takeEvery(GET_POSTS_ACTIONS, handleGetPosts);
  yield takeEvery(GET_POST_BY_USER_ID, handleGetPostsByUserId);
}

export default watchGetPostSaga;
