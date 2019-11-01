import React from 'react';
import {createAppContainer} from 'react-navigation';
import RootStack from './src/Routes';
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';
const AppContainer = createAppContainer(RootStack);

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;
