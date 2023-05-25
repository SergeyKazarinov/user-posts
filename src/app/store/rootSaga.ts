import { watchGetCommentSaga } from 'entities/comments';
import { watchGetPostSaga } from 'entities/post';
import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
  yield spawn(watchGetPostSaga);
  yield spawn(watchGetCommentSaga);
}
