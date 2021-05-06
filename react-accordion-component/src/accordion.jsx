import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { languageClicked: null };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const accordList = this.props.languages.map(language =>
      <div onClick={() => this.handleClick(language.number)} key={language.number}>
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

  handleClick(languageNumber) {
    if (languageNumber === this.state.languageClicked) {
      this.setState({ languageClicked: null });
    } else {
      this.setState({ languageClicked: languageNumber });
    }
  }

}

export default Accordion;
