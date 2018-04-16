import { makeTheme } from 'bootstrap-styled';
import { changeTheme, deleteTheme, insertTheme, updateTheme } from '../actions';
import { CHANGE_THEME, INSERT_THEME, UPDATE_THEME, DELETE_THEME } from '../constants';


describe('bootstrap-styled-redux actions', () => {
  let theme;
  beforeAll(() => {
    theme = makeTheme({
      '$brand-primary': 'red',
    });
  })

  describe('changeTheme', () => {
    it('should dispatch changeTheme', () => {
      expect(changeTheme(theme)).toEqual({
        type: CHANGE_THEME,
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

  describe('insertTheme', () => {
    it('should dispatch insertTheme', () => {
      expect(insertTheme(theme)).toEqual({
        type: INSERT_THEME,
        theme,
      });
    });
  });

  describe('updateTheme', () => {
    it('should dispatch updateTheme', () => {
      expect(updateTheme(theme)).toEqual({
        type: UPDATE_THEME,
        theme,
      });
    });
  });
});
