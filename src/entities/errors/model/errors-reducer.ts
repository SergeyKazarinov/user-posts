import { CLEAR_ERROR_ACTION, SET_ERROR_ACTION } from 'shared';
import { TErrorActions } from '../types/action-types';

interface IInitialState {
  isError: boolean;
  errorMessage: string;
}

const initialState: IInitialState = {
  isError: false,
  errorMessage: '',
};

export const errorReducer = (
  state = initialState,
  action: TErrorActions,
): IInitialState => {
  switch (action.type) {
    case SET_ERROR_ACTION: return {
      ...state, isError: true, errorMessage: 'Произошла ошибка',
    };

    case CLEAR_ERROR_ACTION: return {
      ...state, isError: false, errorMessage: '',
    };

    default: return state;
  }
};
