import React from 'react';

class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.clickCount > 2 && this.state.clickCount <= 5) {
      return <button onClick={this.handleClick} className = "dark-purple"> {this.props.text} </button>;
    } else if (this.state.clickCount > 5 && this.state.clickCount <= 8) {
      return <button onClick={this.handleClick} className="purple"> {this.props.text} </button>;
    } else if (this.state.clickCount > 8 && this.state.clickCount <= 11) {
      return <button onClick={this.handleClick} className="red"> {this.props.text} </button>;
    } else if (this.state.clickCount > 11 && this.state.clickCount <= 14) {
      return <button onClick={this.handleClick} className="orange"> {this.props.text} </button>;
    } else if (this.state.clickCount > 14 && this.state.clickCount <= 17) {
      return <button onClick={this.handleClick} className="yellow"> {this.props.text} </button>;
    } else if (this.state.clickCount > 17) {
      return <button onClick={this.handleClick} className="white"> {this.props.text} </button>;
    }
    return <button onClick={this.handleClick}> {this.props.text} </button>;
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }
}

export default HotButton;
