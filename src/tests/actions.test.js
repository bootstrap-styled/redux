import { makeTheme } from 'bootstrap-styled';
import {
  changeTheme, storeTheme, deleteTheme, deleteThemes,
} from '../actions';
import {
  CHANGE_THEME, STORE_THEME, DELETE_THEME, DELETE_THEMES,
} from '../constants';


describe('bootstrap-styled-redux actions', () => {
  let theme;
  beforeAll(() => {
    theme = makeTheme({
      '$brand-primary': 'red',
    });
  });

  describe('changeTheme', () => {
    it('should dispatch changeTheme', () => {
      expect(changeTheme(theme)).toEqual({
        type: CHANGE_THEME,
        theme,
      });
    });
  });

  describe('storeTheme', () => {
    it('should dispatch storeTheme', () => {
      expect(storeTheme(theme)).toEqual({
        type: STORE_THEME,
        theme,
      });
    });
  });

  describe('deleteTheme', () => {
    it('should dispatch deleteTheme', () => {
      expect(deleteTheme(theme)).toEqual({
        type: DELETE_THEME,
        theme,
      });
    });
  });

  describe('deleteThemes', () => {
    it('should dispatch deleteThemes', () => {
      expect(deleteThemes()).toEqual({
        type: DELETE_THEMES,
      });
    });
  });
});
