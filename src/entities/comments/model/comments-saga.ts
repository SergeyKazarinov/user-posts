import { delay, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_COMMENT_ACTIONS, getAllComments } from 'shared';
import { IComments } from 'types/post';
import { AxiosError } from 'axios';
import { setCommentActionCreator, setCommentErrorActionCreator } from '../lib/action-creator';

function* handleGetAllComments() {
  try {
    yield delay(2000);
    const data: IComments[] = yield getAllComments();
    yield put(setCommentActionCreator(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      yield put(setCommentErrorActionCreator());
    }
  }
}

export function* watchGetCommentSaga() {
  yield takeEvery(GET_ALL_COMMENT_ACTIONS, handleGetAllComments);
}
