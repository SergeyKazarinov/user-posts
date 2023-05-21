import { TOGGLE_BURGER_MENU } from 'shared';

const initialState = {
  isBurger: false,
};

const toggleBurgerMenuReducer = (
  state: { isBurger: boolean } = initialState,
  { type }: { type: string },
) => {
  switch (type) {
    case TOGGLE_BURGER_MENU: return { ...state, isBurger: !state.isBurger };
    default: return state;
  }
};

export default toggleBurgerMenuReducer;
