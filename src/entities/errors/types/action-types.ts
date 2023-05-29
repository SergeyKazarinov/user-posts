import { CLEAR_ERROR_ACTION, SET_ERROR_ACTION } from 'shared';

export interface ISetErrorActionCreator {
  readonly type: typeof SET_ERROR_ACTION;
}

export interface IClearErrorActionCreator {
  readonly type: typeof CLEAR_ERROR_ACTION;
}

export type TErrorActions =
  | ISetErrorActionCreator
  | IClearErrorActionCreator;
