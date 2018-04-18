```js
const { default: Button } = require('bootstrap-styled/lib/Button');
<ConnectedBootstrapProvider injectGlobal={false}>
  <ThemeToggle />
  <div>
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="info">info</Button>
    <Button color="warning">warning</Button>
    <Button color="danger">danger</Button>
    <Button color="link">link</Button>
  </div>
</ConnectedBootstrapProvider>
```
