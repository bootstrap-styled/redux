import bootstrap from 'bootstrap-styled/lib/theme';
import { CHANGE_THEME, INSERT_THEME, UPDATE_THEME, DELETE_THEME } from './constants';

export const initialState = {
  'bs.redux': {
    current: bootstrap._name, // eslint-disable-line no-underscore-dangle
    themes: {
      [bootstrap._name]: bootstrap,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      const newState = Object.assign({}, state);
      if (Object.keys(state['bs.redux'].themes).indexOf(action.theme._name) === -1) {
        throw new Error(`Fail changing theme to "${action.theme._name}". Reason: theme does not exist`); // eslint-disable-line no-underscore-dangle
      }
      newState['bs.redux'].current = action.theme._name; // eslint-disable-line no-underscore-dangle
      return newState;
    }
    case INSERT_THEME: {
      const newState = Object.assign({}, state);
      if (Object.keys(state['bs.redux'].themes).indexOf(action.theme._name) !== -1) {
        throw new Error(`Fail inserting theme "${action.theme._name}". Reason: theme already exist, use updateTheme action instead.`); // eslint-disable-line no-underscore-dangle
      }
      newState['bs.redux'].themes[action.theme._name] = action.theme; // eslint-disable-line no-underscore-dangle
      return newState;
    }
    case UPDATE_THEME: {
      const newState = Object.assign({}, state);
      if (Object.keys(state['bs.redux'].themes).indexOf(action.theme._name) === -1) {
        throw new Error(`Fail updating theme "${action.theme._name}". Reason: theme does not exist, maybe you want to use insertTheme action.`); // eslint-disable-line no-underscore-dangle
      }
      newState['bs.redux'].themes[action.theme._name] = action.theme; // eslint-disable-line no-underscore-dangle
      return newState;
    }
    case DELETE_THEME: {
      const newState = Object.assign({}, state);
      if (Object.keys(state['bs.redux'].themes).length === 1) {
        throw new Error(`Fail while deleting theme "${action.theme._name}". Reason: You must have at least one theme left after deletion`); // eslint-disable-line no-underscore-dangle
      }
      delete newState['bs.redux'].themes[action.theme._name]; // eslint-disable-line no-underscore-dangle
      return newState;
    }
    default:
      return state;
  }
};
