import React from 'react';


class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.isClicked === true) {
      const header = this.state.header
      const languages = this.props.languages;
      const ListItems = languages.map((language) => {
        console.log(language.language);
        if (header === language.language) {
          console.log(header);
          <div key={language.language} >
            <h2 onClick={this.handleClick}> {language.language} </h2>
            <li>
              {language.info}</li>
          </div >;
        };
      });
      console.log(ListItems)
      return (
        <ul>
          {ListItems}
        </ul>
      );
    }
    return <div>
      <h2 onClick={this.handleClick}>Hypertext Markup Language</h2>
      <h2 onClick={this.handleClick}>Cascading Style Sheets</h2>
      <h2 onClick={this.handleClick}>JavaScript</h2>
    </div >;

  }

  handleClick(event) {
    this.setState({ isClicked: true, header: event.target.textContent });

  }

}

export default Accordion;
