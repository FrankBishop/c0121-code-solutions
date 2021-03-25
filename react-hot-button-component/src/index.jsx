import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button.jsx';

const element = (
  <div>
    <HotButton text="Hot Button" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
