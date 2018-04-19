The `<ConnectedBootstrapProvider />` component is the one who let you connect the main theme with Redux.

```js
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { default: Badge } = require('bootstrap-styled/lib/Badge');
const { makeTheme, default: theme } = require('bootstrap-styled/lib/theme');
const { combineReducers } = require('redux');
// you can import the reducer and use it later with combineReducer 
const { default: themeReducer } = require('bootstrap-styled-redux/lib/reducer/themeReducer');
// or import the combineReducer we have made for you
// const { reducer } = require('bootstrap-styled-redux/lib/reducer');

// create a custom theme to store
const customTheme = makeTheme({
  '_name': 'bootstrap-styled-red', // not that we rename the theme to create a new one
  '$badge-default-bg': '#991C63',
  '$badge-primary-bg': '#A4D5FF',
  '$badge-success-bg': '#DD4965',
  '$badge-info-bg': '#69DD8E',
  '$badge-warning-bg': '#701BDD',
  '$badge-danger-bg': '#3D5',
  '$badge-color': '#f29',
  '$badge-link-hover-color': '#479',
  '$badge-font-size': '115%',
  '$badge-font-weight': 'normal',
  '$badge-padding-x': '.18em',
  '$badge-padding-y': '.1em',
  '$badge-pill-padding-x': '.2em',
  '$badge-pill-border-radius': '10rem',
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
});

// initialize the store theme and an optional list of themes to be store
const store = createStore(combineReducers({
  'bs.redux': themeReducer,
}), {
  // 2nd parameter of create store is initialValues so we can add our new theme
  'bs.redux': {
    theme, 
    themes: { 
      [theme._name]: theme,
      [customTheme._name]: customTheme, 
    },  
  }  
});
<Provider store={store}>
  <ConnectedBootstrapProvider>
    <ThemeToggle />
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
