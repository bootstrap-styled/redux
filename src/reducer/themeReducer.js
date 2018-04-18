import bootstrapStyled from 'bootstrap-styled/lib/theme';
import { CHANGE_THEME, DELETE_THEME, STORE_THEME } from '../constants';

export const initialState = {
  theme: bootstrapStyled,
  themes: { 'bootstrap-styled': bootstrapStyled },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      // allow change by theme name
      if (typeof action.theme === 'string') { // eslint-disable-line no-underscore-dangle
        return { ...state, theme: state.themes[action.theme] };
      }
      // allow change by insert/override themes directly
      return { ...state, themes: { ...state.themes, [action.theme._name]: action.theme }, theme: action.theme }; // eslint-disable-line no-underscore-dangle
    }
    case STORE_THEME: {
      const newState = { ...state };
      newState.themes[action.theme._name] = action.theme; // eslint-disable-line no-underscore-dangle
      return newState;
    }
    case DELETE_THEME: {
      const newState = { ...state };
      delete newState.themes[action.theme._name]; // eslint-disable-line no-underscore-dangle
      return newState;
    }
    default:
      return state;
  }
};
