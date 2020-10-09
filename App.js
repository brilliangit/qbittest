
import React from 'react';

import { BottomNav } from './src/components';
import { Provider } from 'react-redux';
import store from './src/app/models/store';

const App = () => {
  return (
    <Provider store={store}>
      <BottomNav />
    </Provider>
  );
};

export default App;