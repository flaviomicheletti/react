'use strict';

class MyDiv extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return <div> {
      this.props.names.map(function (name, index) {
        return <div key={index}>Hello, {name}!</div>
      })
    }
    </div>
  }
  
}

var names;

ReactDOM.render(
  // this.props.names is undefined
  // React.createElement(MyDiv, names=['Alice', 'Emily', 'Kate']),
  React.createElement(MyDiv, {names:['Alice', 'Emily', 'Kate']}),
  document.getElementById('content')
);