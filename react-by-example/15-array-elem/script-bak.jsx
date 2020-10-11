'use strict';

class NotesList extends React.Component {
  render() {
    return (
      <ul>
        {
          React.Children.map(this.props.children, function (child) {
            //console.log(child);
            return <li key="{child.id}" value="{child.value}">{child}</li>;
          })
        }
      </ul>
    );
  }
}

class NotesItens extends React.Component {
  render() {
    return (
      <li>asd</li>
    )
  };
}

ReactDOM.render(
  <NotesList>{[
    <NotesItens key={1}></NotesItens>,
    <NotesItens key={2}></NotesItens>,
    <NotesItens key={3}></NotesItens>
  ]}</NotesList>,
  document.getElementById('content')
);


{/* <NotesList>{[
  {"value": "hello", "label": "Hello world!"},
  {"value": "awesome", "label": "React is awesome"}
]}</NotesList>, */}