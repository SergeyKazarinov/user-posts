import { CLEAR_ERROR_ACTION, SET_ERROR_ACTION } from 'shared';
import { TErrorActions } from '../types/action-types';

interface IInitialState {
  errorMessage: string;
}

const initialState: IInitialState = {
  errorMessage: '',
};

export const errorReducer = (
  state = initialState,
  action: TErrorActions,
): IInitialState => {
  switch (action.type) {
    case SET_ERROR_ACTION: return {
      ...state, errorMessage: 'Произошла ошибка',
    };

    case CLEAR_ERROR_ACTION: return {
      ...state, errorMessage: '',
    };

    default: return state;
  }
};
