import React from 'react';
import ReactDOM from 'react-dom';
import Home from './ui/Home';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);