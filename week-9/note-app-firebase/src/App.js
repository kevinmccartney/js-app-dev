import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './Router';
import storeService from './services/redux/storeService';
import { getNotes } from './services/api';

class App extends React.Component {
  async componentDidMount() {
    const notes = await getNotes();

    console.log(notes);
  }

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
