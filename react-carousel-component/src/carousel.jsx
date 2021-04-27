import React from 'react';

class Carousel extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { menuOpen: false };
  //   this.handleClick = this.handleClick.bind(this);
  //   this.closeMenu = this.closeMenu.bind(this);
  // }

  render() {
    const imageC = this.props.images.map(image =>
      <div key={image.number}>
        <img src={image.image} alt="image" />
      </div>
    );
    return <div>
      <h1>This is the Carousel</h1>
      <div>{imageC}</div>
    </div>;
  }

}

export default Carousel;
