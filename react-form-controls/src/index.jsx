import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type = "email" value = {this.state.value} onChange = {this.handleChange} ></input>
      <button type = "submit">Sign Up</button>
    </form>;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('state', this.state);
    event.preventDefault();
  }

}

const element = (
  <div>
    <NewsletterForm />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
