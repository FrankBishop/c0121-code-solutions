import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch.jsx';

const element = (
  <div>
    <ToggleSwitch text="ON" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
