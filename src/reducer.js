import bootstrapStyled from 'bootstrap-styled/lib/theme';
import { CHANGE_THEME, DELETE_THEME, DELETE_THEMES, STORE_THEME } from './constants';


/* fix bs default name */
export const initialState = {
  theme: bootstrapStyled,
  themes: { [bootstrapStyled._name]: bootstrapStyled }, // eslint-disable-line no-underscore-dangle
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
      /** if a string name is used, it's obviously local */
      if (typeof action.theme === 'string') {
        return { themes: state.themes, theme: state.themes[action.theme] || state.theme }; // this will prevent false name
      }
      /** allow change by theme so extension can inject theme using this action */
      return { themes: { ...state.themes }, theme: action.theme };
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
