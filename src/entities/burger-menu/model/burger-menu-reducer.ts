import { TOGGLE_BURGER_MENU } from 'shared';
import { TBurgeMenuActions } from '../types/action-types';

interface IInitialState {
  isBurger: boolean
}

const initialState: IInitialState = {
  isBurger: false,
};

export const toggleBurgerMenuReducer = (
  state = initialState,
  action: TBurgeMenuActions,
): IInitialState => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU: return { ...state, isBurger: !state.isBurger };
    default: return state;
  }
};
