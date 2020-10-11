//
// https://codepen.io/gaearon/pen/YGrLxm
//

import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handleChange()");
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    console.log("handleSubmit()");
    console.log('Text field value is: "' + this.state.value + '"');
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Edit me"
          value={this.state.value}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('container')
);
