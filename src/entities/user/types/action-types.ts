import {
  GET_USERS_BY_ID, SET_ERROR_USER_ACTION, SET_USER_BY_USER_ID,
} from 'shared';
import { IUser } from 'types/user';

export interface IGetUserByUserId {
  readonly type: typeof GET_USERS_BY_ID,
  userId: string
}

export interface ISetUserByUserId {
  readonly type: typeof SET_USER_BY_USER_ID,
  user: IUser;
}

export interface ISetUserError {
  readonly type: typeof SET_ERROR_USER_ACTION,
}

export type TUserActions =
  | IGetUserByUserId
  | ISetUserByUserId
  | ISetUserError;
