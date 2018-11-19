import { createSelector } from 'reselect';

export const selectBsRedux = (state) => state.get ? state.get('bs.redux') : state['bs.redux'];

/**
 * themes
 */
export const selectThemes = createSelector(
  selectBsRedux,
  (bsReduxState) => bsReduxState.themes,
);

/**
 * theme
 */
export const selectTheme = createSelector(
  selectBsRedux,
  (bsReduxState) => bsReduxState.theme,
);

/**
 * current theme name
 */
export const selectValue = createSelector(
  selectBsRedux,
  (bsReduxState) => bsReduxState.theme._name, // eslint-disable-line no-underscore-dangle
);

/**
 * current available theme list
 */
export const selectValues = createSelector(
  selectBsRedux,
  (bsReduxState) => Object.keys(bsReduxState.themes).map((key) => bsReduxState.themes[key]._name), // eslint-disable-line no-underscore-dangle
);
