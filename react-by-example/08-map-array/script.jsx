'use strict';

var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name, index) {
      return <div key={index}>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('content')
);