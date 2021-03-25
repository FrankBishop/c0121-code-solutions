import React from 'react';

class ToggleSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.isClicked === true) {
      return <div>
        <p className="text">OFF</p>
        <div className="off"></div>
        <button onClick={this.handleClick} className="switch-off"></button>
      </div>;
    }
    return <div>
      <p className="text">ON</p>
      <div className="on"></div>
      <button onClick={this.handleClick} className="switch-on"></button>
    </div>;
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }
}

export default ToggleSwitch;
