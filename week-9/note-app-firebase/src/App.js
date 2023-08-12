import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './Router';
import storeService from './services/redux/storeService';

class App extends React.Component {
  render() {
    return (
      <Provider
        store={storeService.store}
      >
        <PersistGate
          persistor={storeService.persistor}
          loading={null}
        >
          <Router />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
