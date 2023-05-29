import { SET_ERROR_USER_ACTION, SET_USER_BY_USER_ID } from 'shared';
import { IUser } from '../../../types/user';
import { TUserActions } from '../types/action-types';

interface IInitialState {
  user: IUser | null;
  userErrorMessage: string;
}

const initialState: IInitialState = {
  user: null,
  userErrorMessage: '',
};

export const userReducer = (
  state = initialState,
  action: TUserActions,
): IInitialState => {
  switch (action.type) {
    case SET_USER_BY_USER_ID: return {
      ...state, user: action.user,
    };

    case SET_ERROR_USER_ACTION: return { ...state, userErrorMessage: 'Произошла ошибка получения информации о пользователе с сервера' };

    default: return state;
  }
};
