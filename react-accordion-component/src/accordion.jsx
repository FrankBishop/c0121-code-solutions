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
      <div number={language.number} key={language.number}>
        <h2 onClick={this.handleClick} onDoubleClick={this.close}>{language.language}</h2>
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
    let accordNumber = event.target.parentElement.getAttribute('number');
    accordNumber = Number(accordNumber);
    this.setState({ languageClicked: accordNumber });
  }

  close() {
    this.setState({ languageClicked: null });
  }

}

export default Accordion;
