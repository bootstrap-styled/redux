```bash
$ npm install $PACKAGE_NAME --save
```

To create the store, you need to use either our `combinedReducer`: 

```js static
import { createStore } from 'redux';
import { combinedReducer } from '@bootstrap-styled/redux/lib';

const store = createStore(combinedReducer);
```

or to combine it your self

```js static
import { createStore, combineReducers } from 'redux';
import { themeReducer } from '@bootstrap-styled/redux/lib';
// import your own reducer
import appReducer from './reducer'; 

const store = createStore(combineReducers({
  'bs.redux': themeReducer,
  app: appReducer,
}));
```
