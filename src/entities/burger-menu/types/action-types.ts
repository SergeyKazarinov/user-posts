import { TOGGLE_BURGER_MENU } from 'shared';

export interface IToggleBurgerMenuAction {
  readonly type: typeof TOGGLE_BURGER_MENU
}

export type TBurgeMenuActions =
  | IToggleBurgerMenuAction;
