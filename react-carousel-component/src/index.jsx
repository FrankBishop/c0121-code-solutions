import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    number: 1,
    image: 'images/001.png'
  },
  {
    number: 2,
    image: 'images/004.png'
  },
  {
    number: 3,
    image: 'images/007.png'
  },
  {
    number: 4,
    image: 'images/025.png'
  },
  {
    number: 5,
    image: 'images/039.png'
  }
];

const element = (
  <div className="carousel-holder">
    <Carousel images={images} />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
