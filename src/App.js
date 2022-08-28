import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MainNavigation from './mainNavigation';
import { store, persistor } from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
