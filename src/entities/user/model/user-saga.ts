import { put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_BY_ID, getUsersById } from 'shared';
import { IUser } from 'types/user';
import { IGetUserByUserId } from '../types/action-types';
import { setUserByUserIdActionCreator } from './action-creator';

function* handleGetUsersById({ userId }: IGetUserByUserId) {
  const data: IUser = yield getUsersById(userId);
  yield put(setUserByUserIdActionCreator(data));
}

export function* watchGetUsersById() {
  yield takeEvery(GET_USERS_BY_ID, handleGetUsersById);
}
