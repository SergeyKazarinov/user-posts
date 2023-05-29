import { TOGGLE_BURGER_MENU } from 'shared';
import { IToggleBurgerMenuAction } from '../types/action-types';

export const toggleBurgerMenuAction = (): IToggleBurgerMenuAction => ({
  type: TOGGLE_BURGER_MENU,
});
