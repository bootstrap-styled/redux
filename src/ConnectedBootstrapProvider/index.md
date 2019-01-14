The `<ConnectedBootstrapProvider />` component is the one who let you connect the main theme with Redux.

```js
const { createStore, combineReducers } = require('redux');
const { Provider } = require('react-redux');
const { makeTheme, theme } = require('bootstrap-styled/lib');
const { Form, Badge } = require('@bootstrap-styled/v4/lib');
const { default: themeReducer } = require('@bootstrap-styled/redux/lib/reducer');
const { REDUX_BS_KEY } = require('@bootstrap-styled/redux/lib/constants');

// create themes to be stored
const sampleTheme = makeTheme({
  '_name': 'bootstrap-styled-sample', // not that we rename the theme to create a new one
  '$badge-default-bg': '#991C63',
  '$badge-primary-bg': '#A4D5FF',
  '$badge-success-bg': '#DD4965',
  '$badge-info-bg': '#69DD8E',
  '$badge-warning-bg': '#701BDD',
});

const sampleThemeBis = makeTheme({
  ...sampleTheme,
  '_name': 'bootstrap-styled-bis', // not that we rename the theme to create a new one
  '$badge-default-bg': '#A4D5FF',
  '$badge-primary-bg': '#991C63',
  '$badge-padding-x': '.18em',
  '$badge-padding-y': '.1em',
  '$badge-pill-padding-x': '.2em',
  '$badge-pill-border-radius': '10rem',
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
});

const reducers = combineReducers({
  [REDUX_BS_KEY]: themeReducer,
  // add more reducers to your app
});

const store = createStore(reducers, {
  // 2nd parameter of create store is for store initial values
  [REDUX_BS_KEY]: {
    theme,
    themes: {
      [theme._name]: theme,
      [sampleTheme._name]: sampleTheme,
      [sampleThemeBis._name]: sampleThemeBis,
    },
  }
});

<Provider store={store}>
  <ConnectedBootstrapProvider>
    <Form>
      <ThemeToggle />
    </Form>
    <div>
      <Badge color="primary">primary</Badge>
      <Badge color="success">success</Badge>
      <Badge color="info">info</Badge>
      <Badge color="warning">warning</Badge>
      <Badge color="danger">danger</Badge>
    </div>
  </ConnectedBootstrapProvider>
</Provider>
```
