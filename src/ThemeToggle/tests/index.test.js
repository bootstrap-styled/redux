import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import theme from 'bootstrap-styled/lib/theme';
import { changeTheme as changeThemeAction } from '../../actions';
import reducer from '../../reducer';
import { REDUX_BS_KEY } from '../../constants';
import ThemeToggle, { mapDispatchToProps } from '..';

/* eslint-disable function-paren-newline */
describe('<ThemeToggle />', () => {
  let store;
  beforeAll(() => {
    store = createStore(combineReducers({ [REDUX_BS_KEY]: reducer }));
  });

  it('should render the default language messages', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );
    expect(renderedComponent.contains(<ThemeToggle />)).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onToggle', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onToggle).toBeDefined();
      });

      it('should dispatch onToggle when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const evt = { target: { value: theme } };
        result.onToggle(evt);
        expect(dispatch).toHaveBeenCalledWith(changeThemeAction(theme));
      });
    });
  });
});
