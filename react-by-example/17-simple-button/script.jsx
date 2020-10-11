'use strict';

class LikeButton extends React.Component {

  handleClick(event) {
    console.log(event);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Clik here</button>
    );
  }
  
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('content')
);