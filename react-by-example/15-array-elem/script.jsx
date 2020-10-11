'use strict';

//
// dados
//
let listData = [
  { "value": "hello", "label": "Hello world!" },
  { "value": "awesome", "label": "React is awesome" }
];

class NotesList extends React.Component {
  render() {

    // console.log(this.props);
    let key = 0;

    return (
      <ul>
        {
          this.props.data.map(function (eachData, index) {
            console.log(eachData);
            key++;
            // return <li key={key}>{foo.label}</li>
            return <NotesItens key={key} value={eachData.value} label={eachData.label} />
          })

        }
      </ul>
    );
  }
}

class NotesItens extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <li key="{key}" value={this.props.value}>{this.props.label}</li>
    )
  };
}

ReactDOM.render(
  <NotesList data={listData} />,
  document.getElementById('content')
);

