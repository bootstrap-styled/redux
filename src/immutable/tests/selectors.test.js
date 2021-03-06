import { fromJS } from 'immutable';
import { initialState } from '../reducer';
import {
  selectBsRedux, selectTheme, selectThemes, selectValue, selectValues,
} from '../selectors';
import { REDUX_BS_KEY } from '../../constants';

describe('selectBsRedux immutable', () => {
  let state;
  let bsReduxState;

  beforeEach(() => {
    bsReduxState = initialState;
    state = fromJS({
      [REDUX_BS_KEY]: bsReduxState,
    });
  });

  describe('selectBsRedux', () => {
    it('should select the @bootstrap-styled/redux state', () => {
      expect(selectBsRedux(state)).toEqual(state.get(REDUX_BS_KEY));
    });

    describe('selectTheme', () => {
      it('should select the theme', () => {
        expect(selectTheme(state)).toEqual(bsReduxState.get('theme'));
      });
    });

    describe('selectThemes', () => {
      it('should select the themes', () => {
        expect(selectThemes(state)).toEqual(bsReduxState.get('themes'));
      });
    });

    describe('selectValue', () => {
      it('should select the value', () => {
        expect(selectValue(state)).toEqual(bsReduxState.getIn(['theme', '_name'])); // eslint-disable-line no-underscore-dangle
      });
    });

    describe('selectValues', () => {
      it('should select the values', () => {
        expect(selectValues(state)).toEqual(bsReduxState.get('themes').keySeq().toArray().map((t) => t._name)); // eslint-disable-line no-underscore-dangle
      });
    });
  });
});
