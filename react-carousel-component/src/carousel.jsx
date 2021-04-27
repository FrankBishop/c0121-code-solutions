import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { image: 2 };
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    setInterval(this.change, 3000);
  }

  render() {
    const imageC = this.props.images.map(image =>
      <div key={image.number}>
        <i className="fas fa-angle-left fa-5x"></i>
        {this.state.image === image.number &&
          <img src={image.image} alt="image" />
        }
        <i className="fas fa-angle-right fa-5x"></i>
      </div>
    );
    const circles = this.props.images.map(image =>
      <div key={image.number}>
        <i className="far fa-circle fa-lg dot" image={image.image}></i>
      </div>
    );
    return <div className="carousel">
      <h1>This is the Carousel</h1>
      <div>{imageC}</div>
      <div>{circles}</div>
    </div>;
  }

  change() {
    if (this.state.image < this.props.images.length) {
      this.setState({ image: this.state.image + 1 });
    } else {
      this.setState({ image: 1 });
    }
  }

}

export default Carousel;
