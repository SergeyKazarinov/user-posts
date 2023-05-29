import { CLEAR_ERROR_ACTION, SET_ERROR_ACTION } from 'shared';
import { IClearErrorActionCreator, ISetErrorActionCreator } from '../types/action-types';

export const setErrorActionCreator = (): ISetErrorActionCreator => ({
  type: SET_ERROR_ACTION,
});

export const clearErrorActionCreator = (): IClearErrorActionCreator => ({
  type: CLEAR_ERROR_ACTION,
});
