'use strict';

var arr = [
  <li key="1" value="hello">Hello world!</li>,
  <li key="2" value="awesome">React is awesome</li>,
];

ReactDOM.render(
  <div>
    <ul>{arr}</ul>
  </div>,
  document.getElementById('content')
);