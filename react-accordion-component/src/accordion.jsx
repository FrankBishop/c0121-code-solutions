import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div>
      <h2 onClick={this.handleClick}>Hypertext Markup Language</h2>
      <h2 onClick={this.handleClick}>Cascading Style Sheets</h2>
      <h2 onClick={this.handleClick}>JavaScript</h2>
    </div>;
  }

  handleClick(event) {
    for (let i = 0; i < 3; i++) {
      console.log(this.props[i]);
    }
  }

}

export default Accordion;


// handle click changes state, once state is changed, render loops through to determine what to show
