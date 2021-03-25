import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.isClicked === true) {
      return <button onClick={this.handleClick}> {'Thanks'}</button>;
    } else {
      return <button onClick={this.handleClick}> {this.props.text}</button>;
    }
  }

  handleClick() {
    this.setState({ isClicked: true });
  }
}

const element = (
  <div>
    <CustomButton text="Click Me" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
