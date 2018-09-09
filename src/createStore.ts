import { createStore, Store } from 'redux';

import { ReduxState } from './types';
import { reducer } from './reducer';

const initialState: ReduxState = {};

export default function createStore_(): Store<ReduxState> {
  const store = createStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      console.log('reloading reducer');
      store.replaceReducer(require('./reducer').reducer);
    });
  }
  return store;
}
