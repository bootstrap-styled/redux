import { CHANGE_THEME, STORE_THEME, DELETE_THEME } from './constants';

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

export const storeTheme = (theme) => ({
  type: STORE_THEME,
  theme,
});

export const deleteTheme = (theme) => ({
  type: DELETE_THEME,
  theme,
});
