import React from 'react';
import ReactDOM from 'react-dom';

//
// Repare que `this.props.name` não existe e, ao compilar, nenhum erro é exibido 
//
class Welcome extends React.Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('container')
);
