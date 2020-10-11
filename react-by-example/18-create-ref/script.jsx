'use strict';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myTextInput = React.createRef();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.myTextInput.current.focus();
    console.log(this);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myTextInput} />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('content')
);