import React from 'react';

//redux
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}> 
      <p>Tirando codigo</p>
    </Provider>
  );
}

export default App;
