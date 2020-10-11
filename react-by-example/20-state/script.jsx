'use strict';

class LikeButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      liked: true
    }

    this.handleClick = this.handleClick.bind(this)
    this.text = "Clique aqui!";
  }

  handleClick(event) {

    if (this.state.liked) {
      this.text = "You like this!";
    } else {
      this.text = "You haven\'t liked this!";
    }

    this.setState({ liked: !this.state.liked });

  }

  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (<div>
      <p>Click to toggle.</p>
      <button onClick={this.handleClick}>{this.text}</button>
    </div>
    );
  }
  
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('content')
);