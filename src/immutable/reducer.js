import { fromJS } from 'immutable';
import bootstrapStyled from 'bootstrap-styled/lib/theme';
import { CHANGE_THEME, DELETE_THEME, DELETE_THEMES, STORE_THEME } from '../constants';


/* fix bs default name */
export const initialState = fromJS({
  theme: bootstrapStyled,
  themes: { [bootstrapStyled._name]: bootstrapStyled }, // eslint-disable-line no-underscore-dangle
});

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
        return state.set('theme', state.getIn(['themes', action.theme]) || state.get('theme')); // this will fail silently if the theme does not exist
      }
      /** allow change by theme so extension can inject theme using this action */
      return state.set('theme', fromJS(action.theme));
    }
    case STORE_THEME: {
      return state.setIn(['themes', action.theme._name], fromJS(action.theme));
    }
    case DELETE_THEME: {
      return state.deleteIn(['themes', action.theme._name]);
    }
    case DELETE_THEMES: {
      return state.set('themes', fromJS({}));
    }
    default:
      return state;
  }
};
