import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

export default combineReducers({
  'bs.redux': themeReducer,
});
