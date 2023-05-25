import { TOGGLE_BURGER_MENU } from 'shared';

interface IInitialState {
  isBurger: boolean
}

const initialState: IInitialState = {
  isBurger: false,
};

export const toggleBurgerMenuReducer = (
  state = initialState,
  { type }: { type: string },
) => {
  switch (type) {
    case TOGGLE_BURGER_MENU: return { ...state, isBurger: !state.isBurger };
    default: return state;
  }
};
