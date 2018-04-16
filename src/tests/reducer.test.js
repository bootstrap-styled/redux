import bootstrap from 'bootstrap-styled/lib/theme';
import themeReducer, { initialState } from '../reducer';
import {
  updateTheme as updateThemeAction,
  insertTheme as insertThemeAction,
  deleteTheme as deleteThemeAction,
  changeTheme as changeThemeAction,
} from '../actions';

describe('themeReducer', () => {
  let state;
  let theme;
  let expectedResult;
  beforeEach(() => {
    theme = {
      _name: 'test_theme',
      '$color-primary': 'red',
    };
    state = initialState;
    expectedResult = undefined;
  });

  it('should return the initial state', () => {
    expectedResult = state;
    expect(themeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the insertTheme action correctly', () => {
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          bootstrap,
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
        },
      },
    };
    expect(themeReducer(state, insertThemeAction(theme))).toEqual(expectedResult);
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          bootstrap,
        },
      },
    };
    expect(themeReducer(state, deleteThemeAction(theme))).toEqual(expectedResult);
  });

  it('should handle the updateTheme action correctly', () => {
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          bootstrap,
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
        },
      },
    };
    expect(themeReducer(state, insertThemeAction(theme))).toEqual(expectedResult);
    const updateTheme = Object.assign({}, theme, { '$color-primary': 'blue' });
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          bootstrap,
          [updateTheme._name]: updateTheme, // eslint-disable-line no-underscore-dangle
        },
      },
    };
    expect(themeReducer(state, updateThemeAction(updateTheme))).toEqual(expectedResult);
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          bootstrap,
        },
      },
    };
    expect(themeReducer(state, deleteThemeAction(theme))).toEqual(expectedResult);
  });

  it.only('should handle the deleteTheme action correctly', () => {
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          bootstrap,
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
        },
      },
    };
    expect(themeReducer(state, insertThemeAction(theme))).toEqual(expectedResult);
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
        },
      },
    };
    const deleteTheme = {
      _name: 'bootstrap',
    };
    expect(themeReducer(state, deleteThemeAction(deleteTheme))).toEqual(expectedResult);
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
          bootstrap,
        },
      },
    };
    expect(themeReducer(state, insertThemeAction(bootstrap))).toEqual(expectedResult);
    expectedResult = {
      'bs.redux': {
        current: 'bootstrap',
        themes: {
          bootstrap,
        },
      },
    };
    expect(themeReducer(state, deleteThemeAction(theme))).toEqual(expectedResult);
  });

  it('should handle the changeTheme action correctly', () => {
    expectedResult = {
      'bs.redux': {
        current: 'test_theme',
        themes: {
          bootstrap,
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
        },
      },
    };
    expect(themeReducer(state, changeThemeAction(theme))).toEqual(expectedResult);
  });
});
