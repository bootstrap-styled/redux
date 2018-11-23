import React, { Component } from 'react';
import theme, { makeTheme } from 'bootstrap-styled/lib/theme';
import Provider from 'react-redux/lib/components/Provider';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import themeReducer from '../../src/reducer';

export default class Wrapper extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    store: null,
  }

  /* eslint-disable no-underscore-dangle, function-paren-newline */
  componentWillMount() {
    const middleware = [];
    const composeEnhancers =
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middleware),
      // other store enhancers if any
    );

    const demoTheme = makeTheme({
      _name: 'demo', // eslint-disable-line no-underscore-dangle
      '$btn-primary-bg': 'yellow',
      '$btn-success-bg': 'pink',
      '$btn-warning-bg': 'darkgrey',
    });

    const store = createStore(combineReducers({
      'bs.redux': themeReducer,
    }), {
      'bs.redux': {
        theme,
        themes: {
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
          [demoTheme._name]: demoTheme, // eslint-disable-line no-underscore-dangle
        },
      },
    }, enhancer);
    this.setState({
      store,
    });
  }
  /* eslint-enable no-underscore-dangle, function-paren-newline */

  render() {
    return (
      <Provider store={this.state.store}>
        {this.props.children}
      </Provider>
    );
  }
}

