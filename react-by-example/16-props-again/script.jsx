'use strict';

class HelloMessage extends React.Component {
  render() {
    return <p>Hello {this.props.name}</p>;
  }
}

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('content')
);