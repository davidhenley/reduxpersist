import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';
import App from './App';

const store = createStore(reducers, {}, autoRehydrate());

persistStore(store, { storage: AsyncStorage });

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithStore;
