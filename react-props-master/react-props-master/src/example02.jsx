import React from 'react';
import ReactDOM from 'react-dom';


class TextBox extends React.Component {
  render() {
    return <input type={this.props._type} id={this.props._id} value={this.props._value}/>;
  }
}

ReactDOM.render(
  <TextBox _type="text" _id="123" _value="Hello"/>,
  document.getElementById('container')
);
