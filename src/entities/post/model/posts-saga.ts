import { put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_COMMENT_ACTIONS, GET_COMMENT_BY_POST_ID, GET_POSTS_ACTIONS } from 'shared';
import { getAllComments, getCommentsByPostId, getPosts } from 'shared/api/posts';
import { IComments, IPost } from 'types/post';
import { setCommentActionCreator, setPostsActionCreator } from './action-creator';

function* handleGetAllComments() {
  const data: IComments[] = yield getAllComments();
  yield put(setCommentActionCreator(data));
}

function* handleGetCommentByPostId({ payload }: { type: string, payload: number }) {
  const data: IComments[] = yield getCommentsByPostId(String(payload));
  yield put(setCommentActionCreator(data));
}

function* handleGetPosts() {
  const data: IPost[] = yield getPosts();
  yield put(setPostsActionCreator(data));
}

function* watchGetPostSaga() {
  yield takeEvery(GET_POSTS_ACTIONS, handleGetPosts);
  yield takeEvery(GET_COMMENT_BY_POST_ID, handleGetCommentByPostId);
  yield takeEvery(GET_ALL_COMMENT_ACTIONS, handleGetAllComments);
}

export default watchGetPostSaga;
