import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { theme } from 'bootstrap-styled';
import Button from '@bootstrap-styled/v4/lib/Button';
import ConnectedBootstrapProvider from '../index';
import reducer from '../../../reducer';

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
    expect(renderedComponent.find('BootstrapProvider').prop('theme')).toBe(theme);
  });
});
/* eslint-enable function-paren-newline */
