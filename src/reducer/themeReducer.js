import bootstrapStyled from 'bootstrap-styled/lib/theme';
import { CHANGE_THEME, DELETE_THEME, DELETE_THEMES, STORE_THEME } from '../constants';

export const initialState = {
  theme: bootstrapStyled,
  themes: { 'bootstrap-styled': bootstrapStyled },
};

/* eslint-disable no-underscore-dangle */
/**
 * themeReducer
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      // allow change by theme name
      if (typeof action.theme === 'string') {
        return { themes: state.themes, theme: state.themes[action.theme] || state.theme }; // this will prevent false name
      }
      // allow change by insert/override themes directly
      return { themes: { ...state.themes, [action.theme._name]: action.theme }, theme: action.theme };
    }
    case STORE_THEME: {
      return { themes: { ...state.themes, [action.theme._name]: action.theme }, theme: state.theme };
    }
    case DELETE_THEME: {
      const newState = { ...state };
      delete newState.themes[action.theme._name];
      return newState;
    }
    case DELETE_THEMES: {
      return { ...state, themes: {} };
    }
    default:
      return state;
  }
};
