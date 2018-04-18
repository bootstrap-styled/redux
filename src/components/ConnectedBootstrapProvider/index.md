```js
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { default: Badge } = require('bootstrap-styled/lib/Badge');
const { makeTheme, default: theme } = require('bootstrap-styled/lib/theme');
const { reducer } = require('bootstrap-styled-redux/lib');
const { default: Button } = require('bootstrap-styled/lib/Button');

// create your custom theme
const customTheme = makeTheme({
  '_name': 'bootstrap-styled-red',
  '$badge-default-bg': 'purple',
  '$badge-primary-bg': 'cyan',
  '$badge-success-bg': 'darkgrey',
  '$badge-info-bg': 'orange',
  '$badge-warning-bg': 'lightblue',
  '$badge-danger-bg': '#3D5',
  '$badge-color': '#f20',
  '$badge-link-hover-color': '#999',
  '$badge-font-size': '115%',
  '$badge-font-weight': 'normal',
  '$badge-padding-x': '.8em',
  '$badge-padding-y': '.45em',
  '$badge-pill-padding-x': '.8em',
  '$badge-pill-border-radius': '5rem',
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$btn-primary-bg': 'yellow',
  '$btn-success-bg': 'pink',
  '$btn-warning-bg': 'darkgrey',
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
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="info">info</Button>
      <Button color="warning">warning</Button>
      <Button color="danger">danger</Button>
      <Button color="link">link</Button>
    </div>
  </ConnectedBootstrapProvider>
</Provider>
```
