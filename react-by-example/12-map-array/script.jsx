'use strict';

class MyDiv extends React.Component {
  
  constructor(props) {
    super(props);
    this.names = ['Alice', 'Emily', 'Kate'];
  }

  render() {
    return <div> {
      this.names.map(function (name, index) {
        return <div key={index}>Hello, {name}!</div>
      })
    }
    </div>
  }
  
}

ReactDOM.render(
  React.createElement(MyDiv),
  document.getElementById('content')
);