import { watchGetPostSaga } from 'entities/post';
import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
  yield spawn(watchGetPostSaga);
}
