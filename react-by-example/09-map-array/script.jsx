'use strict';

var names = ['Alice', 'Emily', 'Kate'];

class MyDiv extends React.Component {
  
  // constructor(props) {
  //   super(props);
  // }

  render() {

    return <div> {
      names.map(function (name, index) {
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