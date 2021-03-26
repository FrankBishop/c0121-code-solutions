import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer.jsx';

const element = (
  <div>
    <AppDrawer />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
