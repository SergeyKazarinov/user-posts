import { put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_COMMENT_ACTIONS, getAllComments } from 'shared';
import { IComments } from 'types/post';
import { setCommentActionCreator } from '../lib/action-creator';

function* handleGetAllComments() {
  const data: IComments[] = yield getAllComments();
  yield put(setCommentActionCreator(data));
}

// function* handleGetCommentByPostId({ payload }: { type: string, payload: number }) {
//   const data: IComments[] = yield getCommentsByPostId(String(payload));
//   yield put(setCommentActionCreator(data));
// }

export function* watchGetCommentSaga() {
  // yield takeEvery(GET_COMMENT_BY_POST_ID, handleGetCommentByPostId);
  yield takeEvery(GET_ALL_COMMENT_ACTIONS, handleGetAllComments);
}
