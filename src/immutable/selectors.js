import { createSelector } from 'reselect';

export const selectBsRedux = (state) => state.get('bs.redux');

/**
 * themes
 */
export const selectThemes = createSelector(
  selectBsRedux,
  (bsReduxState) => bsReduxState.get('themes'),
);

/**
 * theme
 */
export const selectTheme = createSelector(
  selectBsRedux,
  (bsReduxState) => bsReduxState.get('theme'),
);

/**
 * current theme name
 */
export const selectValue = createSelector(
  selectBsRedux,
  (bsReduxState) => bsReduxState.getIn(['theme', '_name']), // eslint-disable-line no-underscore-dangle
);

/**
 * current available theme list
 */
export const selectValues = createSelector(
  selectBsRedux,
  (bsReduxState) => bsReduxState.get('themes').keySeq().toArray().map((t) => t._name), // eslint-disable-line no-underscore-dangle
);
