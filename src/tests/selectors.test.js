
import { initialState } from '../reducer';
import {
  selectBsRedux, selectTheme, selectThemes, selectValue, selectValues,
} from '../selectors';
import { REDUX_BS_KEY } from '../constants';

describe('selectBsRedux', () => {
  let state;
  let bsReduxState;

  beforeEach(() => {
    bsReduxState = initialState;
    state = {
      [REDUX_BS_KEY]: bsReduxState,
    };
  });

  describe('selectBsRedux', () => {
    it('should select the @bootstrap-styled/redux state', () => {
      expect(selectBsRedux(state)).toEqual(state['bs.redux']);
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
