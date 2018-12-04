import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './Router';
import storeObj from './store';

const App = () => (
  <Provider
    store={storeObj.store}
  >
    <PersistGate
      persistor={storeObj.persistor}
      loading={null}
    >
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
