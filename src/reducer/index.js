import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

const bsReduxReducer = combineReducers({
  'bs.redux': themeReducer,
});

export default bsReduxReducer;
