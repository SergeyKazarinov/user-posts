import { put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_BY_ID, getUsersById } from 'shared';
import { IUser } from 'types/user';
import { AxiosError } from 'axios';
import { IGetUserByUserId } from '../types/action-types';
import { setUserByUserIdActionCreator, setUserErrorActionCreator } from '../lib/action-creator';

function* handleGetUsersById({ userId }: IGetUserByUserId) {
  try {
    const data: IUser = yield getUsersById(userId);
    yield put(setUserByUserIdActionCreator(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      yield put(setUserErrorActionCreator());
    }
  }
}

export function* watchGetUsersById() {
  yield takeEvery(GET_USERS_BY_ID, handleGetUsersById);
}
