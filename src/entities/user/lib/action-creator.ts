import { GET_USERS_BY_ID, SET_ERROR_USER_ACTION, SET_USER_BY_USER_ID } from 'shared';
import { IUser } from 'types/user';
import { IGetUserByUserId, ISetUserByUserId, ISetUserError } from '../types/action-types';

export const getUserByUserIdActionCreator = (userId: string): IGetUserByUserId => ({
  type: GET_USERS_BY_ID,
  userId,
});

export const setUserByUserIdActionCreator = (user: IUser): ISetUserByUserId => ({
  type: SET_USER_BY_USER_ID,
  user,
});

export const setUserErrorActionCreator = (): ISetUserError => ({
  type: SET_ERROR_USER_ACTION,
});
