import { delay, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_COMMENT_ACTIONS, getAllComments } from 'shared';
import { IComments } from 'types/post';
import { setCommentActionCreator } from '../lib/action-creator';

function* handleGetAllComments() {
  yield delay(2000);
  const data: IComments[] = yield getAllComments();
  yield put(setCommentActionCreator(data));
}

export function* watchGetCommentSaga() {
  yield takeEvery(GET_ALL_COMMENT_ACTIONS, handleGetAllComments);
}
