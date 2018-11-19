
import { initialState } from '../reducer/themeReducer';
import { selectBsRedux, selectTheme, selectThemes, selectValue, selectValues } from '../selectors';

describe('selectBsRedux', () => {
  let state;
  let bsReduxState;

  beforeEach(() => {
    bsReduxState = initialState;
    state = {
      'bs.redux': bsReduxState,
    };
  });

  describe('selectBsRedux', () => {
    it('should select the bootstrap-styled-redux state', () => {
      expect(selectBsRedux(state)).toEqual(state['bs.redux']);
    });

    it('should select the bootstrap-styled-redux state if the store is immutable and have a get method', () => {
      state.get = jest.fn();
      selectBsRedux(state);
      expect(state.get).toHaveBeenCalledWith('bs.redux');
    });

    describe('selectTheme', () => {
      it('should select the theme', () => {
        expect(selectTheme(state)).toEqual(bsReduxState.theme);
      });
    });

    describe('selectThemes', () => {
      it('should select the themes', () => {
        expect(selectThemes(state)).toEqual(bsReduxState.themes);
      });
    });

    describe('selectValue', () => {
      it('should select the value', () => {
        expect(selectValue(state)).toEqual(bsReduxState.theme._name); // eslint-disable-line no-underscore-dangle
      });
    });

    describe('selectValues', () => {
      it('should select the values', () => {
        expect(selectValues(state)).toEqual(Object.keys(bsReduxState.themes).map((key) => bsReduxState.themes[key]._name)); // eslint-disable-line no-underscore-dangle
      });
    });
  });
});
