import { put, takeEvery } from 'redux-saga/effects';
import { GET_POSTS_ACTIONS, getPosts } from 'shared';
import { IPost } from 'types/post';
import { setPostsActionCreator } from './action-creator';

function* handleGetPosts() {
  const data: IPost[] = yield getPosts();
  yield put(setPostsActionCreator(data));
}

function* watchGetPostSaga() {
  yield takeEvery(GET_POSTS_ACTIONS, handleGetPosts);
}

export default watchGetPostSaga;
