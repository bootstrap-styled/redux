import { CHANGE_THEME, INSERT_THEME, UPDATE_THEME, DELETE_THEME } from './constants';

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

export const insertTheme = (theme) => ({
  type: INSERT_THEME,
  theme,
});

export const updateTheme = (theme) => ({
  type: UPDATE_THEME,
  theme,
});

export const deleteTheme = (theme) => ({
  type: DELETE_THEME,
  theme,
});
