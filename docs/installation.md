```bash
$ npm install $PACKAGE_NAME --save
```

You need to import our reducer and use it while you combine your reducers: 

```js static
import { createStore, combineReducer } from 'redux';
import themeReducer from '@bootstrap-styled/redux/lib/reducer';

const store = createStore(combinedReducer({
  'bs.redux': themeReducer, 
   app: appReducer, // your stuff
}));
```
