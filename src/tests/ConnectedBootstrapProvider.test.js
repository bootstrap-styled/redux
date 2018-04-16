import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Button } from 'bootstrap-styled';
import ConnectedBootstrapProvider from '../ConnectedBootstrapProvider';
import reducer from '../reducer';

/* eslint-disable function-paren-newline */
describe('<ConnectedBootstrapProvider />', () => {
  let store;
  beforeAll(() => {
    store = createStore(reducer);
  });

  it('should render the ConnectedBootstrapProvider', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <ConnectedBootstrapProvider injectGlobal={false}>
          <Button>Hey</Button>
        </ConnectedBootstrapProvider>
      </Provider>
    );
    expect(renderedComponent.contains(<Button>Hey</Button>)).toBe(true);
  });
});
/* eslint-enable function-paren-newline */
