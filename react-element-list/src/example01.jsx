import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {

  const listItems = props.numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={"this a " + number} />
  );

  return (<ul>{listItems}</ul>);
}

ReactDOM.render(
  <NumberList numbers={[1, 2, 3, 4, 5]} />,
  document.getElementById('container')
);