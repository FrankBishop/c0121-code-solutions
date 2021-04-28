import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { image: 0, interval: null };
    this.change = this.change.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    const interval = setInterval(this.change, 3000);
    this.setState({ interval: interval });
  }

  render() {
    const imageC = this.props.images.map((image, index) =>
      <div key={index}>
        {this.state.image === index &&
          <div className = "carousel-image" key={index}>
            <i onClick={this.goLeft} className="fas fa-angle-left fa-5x left"></i>
            <img src={image.image} alt="image" />
            <i onClick={this.goRight} className="fas fa-angle-right fa-5x right"></i>
          </div>
        }
      </div>
    );
    const circles = this.props.images.map((image, index) =>
      <div key={index}>
        <i onClick={this.changeImage} number={index} className="far fa-circle fa-lg dot" image={image.image}></i>
      </div>
    );
    return <div className="carousel">
      <div className="image-holder">{imageC}</div>
      <div className="circles">{circles}</div>
    </div>;
  }

  change() {
    if (this.state.image < this.props.images.length - 1) {
      this.setState({ image: this.state.image + 1 });
    } else {
      this.setState({ image: 1 });
    }
  }

  goLeft() {
    if (this.state.image > 1) {
      this.setState({ image: this.state.image - 1 });
    } else {
      this.setState({ image: this.props.images.length - 1 });
    }
  }

  goRight() {
    if (this.state.image < this.props.images.length - 1) {
      this.setState({ image: this.state.image + 1 });
    } else {
      this.setState({ image: 0 });
    }
  }

  changeImage(event) {
    const imageNumber = Number(event.target.getAttribute('number'));
    this.setState({ image: imageNumber });
  }
}

export default Carousel;
