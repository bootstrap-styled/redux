import { theme as bootstrapStyled } from 'bootstrap-styled';
import themeReducer, { initialState } from '../themeReducer';
import {
  changeTheme as changeThemeAction,
  deleteTheme as deleteThemeAction,
  storeTheme as storeThemeAction,
} from '../../actions';

describe('themeReducer', () => {
  let state;
  let theme;
  let themes;
  let expectedResult;
  beforeEach(() => {
    theme = {
      _name: 'test_theme',
      '$color-primary': 'red',
    };
    themes = {
      'bootstrap-styled': bootstrapStyled,
      [theme._name]: theme, // eslint-disable-line no-underscore-dangle
    };
    state = initialState;
    expectedResult = undefined;
    // we force reinstall bootstrap in store just in case we delete it
    themeReducer(state, storeThemeAction(bootstrapStyled));
  });

  it('should return the initial state', () => {
    expectedResult = state;
    expect(themeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeTheme action correctly using a theme', () => {
    expectedResult = {
      theme,
      themes,
    };
    expect(themeReducer({ ...state, themes: { 'bootstrap-styled': bootstrapStyled, [theme._name]: theme } }, changeThemeAction(theme))).toEqual(expectedResult); // eslint-disable-line no-underscore-dangle
  });

  it('should handle the changeTheme action correctly using a name', () => {
    expectedResult = {
      theme,
      themes,
    };
    expect(themeReducer({ ...state, themes: { 'bootstrap-styled': bootstrapStyled, [theme._name]: theme } }, changeThemeAction(theme._name))).toEqual(expectedResult); // eslint-disable-line no-underscore-dangle
  });

  it('should handle the deleteTheme action correctly', () => {
    expectedResult = {
      theme: bootstrapStyled,
      themes: {},
    };
    expect(themeReducer(state, deleteThemeAction(bootstrapStyled))).toEqual(expectedResult);
  });

  it('should handle the storeTheme action correctly', () => {
    expectedResult = {
      theme: bootstrapStyled,
      themes,
    };
    expect(themeReducer(state, storeThemeAction(theme))).toEqual(expectedResult);
  });
});
