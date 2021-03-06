'use strict';

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 'Hello!'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
  
}
  
ReactDOM.render(<Input/>, document.getElementById('content'));