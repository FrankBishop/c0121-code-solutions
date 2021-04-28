import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { languageClicked: null };
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
  }

  render() {
    const accordList = this.props.languages.map(language =>
      <div onClick={this.handleClick} key={language.number}>
        <h2>{language.language}</h2>
        {this.state.languageClicked === language.number &&
          <p>{language.info}</p>
        }
      </div>
    );
    return <div>
      {accordList}
    </div >;

  }

  handleClick(event) {
    console.log('event target', event.target);
    let accordNumber = event.target.getAttribute('key');
    accordNumber = Number(accordNumber);
    if (accordNumber === this.state.languageClicked) {
      this.setState({ languageClicked: null });
    } else {
      this.setState({ languageClicked: accordNumber });
    }
  }

  close() {
    this.setState({ languageClicked: null });
  }

}

export default Accordion;
