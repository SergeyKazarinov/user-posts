import { SET_USER_BY_USER_ID } from 'shared';
import { IUser } from '../../../types/user';
import { TUserActions } from '../types/action-types';

interface IInitialState {
  user: IUser | null;
}

const initialState: IInitialState = {
  user: null,
};

export const userReducer = (
  state = initialState,
  action: TUserActions,
): IInitialState => {
  switch (action.type) {
    case SET_USER_BY_USER_ID: return {
      ...state, user: action.user,
    };

    default: return state;
  }
};
