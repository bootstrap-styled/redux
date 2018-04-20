The `<ThemeToggle />` is an example made of [bootstrap-styled-toggle](https://bootstrap-styled.yeutech.com/bootstrap-styled-toggle) Component.

It demonstrate how to change the theme by reading the `themes` stored.
 
```js
const { Form, Button } = require('bootstrap-styled/lib');
<ConnectedBootstrapProvider injectGlobal={false}>
  <Form>
    <ThemeToggle />
  </Form>
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
