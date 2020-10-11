'use strict';

class NotesList extends React.Component {

  render() {

    // console.log(React.Children);
    // console.log(this.props.children);

    // React.Children.map(this.props.children, function (child) {
    //   console.log(child);
    //   console.log({ child });
    //   return { child };
    // })

    return (
      <ul>
        {
          React.Children.map(this.props.children, function (child) {
            return child ;
            // return { child };
            // Error: Objects are not valid as a React child
          })
        }
      </ul>
    );
  }
}

ReactDOM.render(
  <NotesList>
    <li value="hello">Hello world!</li>
    <li value="awesome">React is awesome</li>
  </NotesList>,
  document.getElementById('content')
);