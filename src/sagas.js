import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CHANGE_THEME } from './constants';
import { changeThemeSuccess, changeThemeFailure } from './actions';

export default (themeProvider) => {
  function* loadTheme(action) {
    try {
      const theme = yield call(themeProvider, action.themes);
      yield put(changeThemeSuccess(theme));
    } catch (err) {
      yield put(changeThemeFailure(action.themes, err));
    }
  }
  return function* () {
    yield all([takeLatest(CHANGE_THEME, loadTheme)]);
  };
};
