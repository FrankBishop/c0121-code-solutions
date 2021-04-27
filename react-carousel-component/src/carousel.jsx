import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { image: 1, interval: setInterval(this.change, 3000) };
    this.change = this.change.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  // componentDidMount() {
  //   setInterval(this.change, 3000);
  // }

  render() {
    const imageC = this.props.images.map(image =>
      <div key={image.number}>
        {this.state.image === image.number &&
          <div key={image.number}>
            <i onClick={this.goLeft} className="fas fa-angle-left fa-5x"></i>
            <img src={image.image} alt="image" />
            <i onClick={this.goRight} className="fas fa-angle-right fa-5x"></i>
          </div>
        }
      </div>
    );
    const circles = this.props.images.map(image =>
      <div key={image.number}>
        <i onClick={this.changeImage} number={image.number} className="far fa-circle fa-lg dot" image={image.image}></i>
      </div>
    );
    return <div className="carousel">
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

  goLeft() {
    if (this.state.image > 1) {
      this.setState({ image: this.state.image - 1 });
      // clearInterval(this.change);
      // setInterval(this.change, 3000);
    } else {
      this.setState({ image: this.props.images.length });
      // clearInterval(this.change);
      // setInterval(this.change, 3000);
    }
  }

  goRight() {
    if (this.state.image < this.props.images.length) {
      this.setState({ image: this.state.image + 1 });
      // setInterval(this.change, 3000);
    } else {
      this.setState({ image: 1 });
      // setInterval(this.change, 3000);
    }
  }

  changeImage(event) {
    const imageNumber = Number(event.target.getAttribute('number'));
    this.setState({ image: imageNumber });
  }
}

export default Carousel;
