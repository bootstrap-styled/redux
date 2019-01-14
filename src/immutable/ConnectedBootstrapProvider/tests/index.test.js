import { fromJS } from 'immutable';
import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import { theme } from 'bootstrap-styled';
import Button from '@bootstrap-styled/v4/lib/Button';
import ConnectedBootstrapProvider from '..';
import reducer from '../../reducer';
import { REDUX_BS_KEY } from '../../../constants';

/* eslint-disable function-paren-newline */
describe('<ConnectedBootstrapProvider />', () => {
  let store;
  beforeAll(() => {
    store = createStore(combineReducers({ [REDUX_BS_KEY]: reducer }));
  });

  it('should render the ConnectedBootstrapProvider', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <ConnectedBootstrapProvider injectGlobal={false} reset={false}>
          <Button>Hey</Button>
        </ConnectedBootstrapProvider>
      </Provider>
    );

    expect(renderedComponent.contains(<Button>Hey</Button>)).toBe(true);
    expect(fromJS(renderedComponent.find('BootstrapProvider').prop('theme')).hashCode()).toBe(fromJS(theme).hashCode());
  });
});
/* eslint-enable function-paren-newline */
