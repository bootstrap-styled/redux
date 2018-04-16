import { CHANGE_THEME, INSERT_THEME, UPDATE_THEME, DELETE_THEME, CHANGE_THEME_SUCCESS, CHANGE_THEME_FAILURE } from './constants';

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

export const changeThemeSuccess = (theme) => ({
  type: CHANGE_THEME_SUCCESS,
  theme,
});

export const changeThemeFailure = (theme, error) => ({
  type: CHANGE_THEME_FAILURE,
  error,
  theme,
});
