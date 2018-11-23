import { fromJS } from 'immutable';
import { theme as bootstrapStyled } from 'bootstrap-styled';
import themeReducer, { initialState } from '../reducer';
import {
  changeTheme as changeThemeAction,
  deleteTheme as deleteThemeAction,
  deleteThemes as deleteThemesAction,
  storeTheme as storeThemeAction,
} from '../../actions';

describe('themeReducer immutable', () => {
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
    expect(themeReducer(undefined, fromJS({}))).toEqual(expectedResult);
  });

  it('should handle the changeTheme action correctly using a theme', () => {
    expectedResult = fromJS({
      theme,
      themes,
    });
    expect(themeReducer(state.setIn(['themes', theme._name], fromJS(theme)), changeThemeAction(theme))).toEqual(expectedResult); // eslint-disable-line no-underscore-dangle
  });

  it('should handle the changeTheme action correctly using a name', () => {
    expectedResult = fromJS({
      theme,
      themes,
    });
    expect(themeReducer(state.setIn(['themes', 'bootstrap-styled'], fromJS(bootstrapStyled)).setIn(['themes', theme._name], fromJS(theme)), changeThemeAction(theme._name))).toEqual(expectedResult); // eslint-disable-line no-underscore-dangle
  });

  it('should handle the changeTheme action with wrong name without changing the main theme', () => {
    expectedResult = fromJS({
      theme: bootstrapStyled,
      themes,
    });
    expect(themeReducer(state.setIn(['themes', 'bootstrap-styled'], fromJS(bootstrapStyled)).setIn(['themes', theme._name], fromJS(theme)), changeThemeAction('fakename'))).toEqual(expectedResult); // eslint-disable-line no-underscore-dangle
  });

  it('should handle the deleteTheme action correctly', () => {
    expectedResult = fromJS({
      theme: bootstrapStyled,
      themes: {},
    });
    expect(themeReducer(state, deleteThemeAction(bootstrapStyled))).toEqual(expectedResult);
  });

  it('should handle the storeTheme action correctly', () => {
    expectedResult = fromJS({
      theme: bootstrapStyled,
      themes: {
        [theme._name]: theme, // eslint-disable-line no-underscore-dangle
        [bootstrapStyled._name]: bootstrapStyled, // eslint-disable-line no-underscore-dangle
      },
    });
    expect(themeReducer(state, storeThemeAction(theme))).toEqual(expectedResult);
  });

  it('should handle deleteThemes action correctly', () => {
    expectedResult = fromJS({
      theme: bootstrapStyled,
      themes: {},
    });
    expect(themeReducer(state, deleteThemesAction())).toEqual(expectedResult);
  });
});
