```js
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { default: Badge } = require('bootstrap-styled/lib/Badge');
const { makeTheme, default: theme } = require('bootstrap-styled/lib/theme');
const { reducer } = require('bootstrap-styled-redux/lib');

// create your custom theme
const customTheme = makeTheme({
  '_name': 'bootstrap-styled-red',
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

// initialize the default theme and an optional list of themes to be store
const store = createStore(reducer, {
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
