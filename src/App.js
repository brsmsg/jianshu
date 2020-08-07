import React from 'react';
import Header from './Common/header/index';
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}


export default App;
