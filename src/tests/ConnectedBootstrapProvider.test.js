import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Button } from 'bootstrap-styled';
import ConnectedBootstrapProvider from '../ConnectedBootstrapProvider';
import reducer from '../reducer';

describe('<ConnectedBootstrapProvider />', () => {
  let store;
  beforeAll(() => {
    store = createStore(reducer);
  });

  it('should render the ConnectedBootstrapProvider', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <ConnectedBootstrapProvider>
          <Button>Hey</Button>
        </ConnectedBootstrapProvider>
      </Provider>
    );
    expect(renderedComponent.contains(<Button>Hey</Button>)).toBe(true);
  });
});
