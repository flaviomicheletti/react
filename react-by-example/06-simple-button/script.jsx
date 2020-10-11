'use strict';

class LikeButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {liked: false};
    // console.log(this);
  }

  // foo() {
  //   // console.log(this);
  //   this.setState({liked: true })
  // }

  render() {

    if (this.state.liked) {
      return 'You liked this.';
    }

    return <button 
              // onClick={this.foo.bind(this)}
              onClick={
                () => this.setState({liked: true })
              }
              >
        Like
      </button>
  }
}

ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('content')
);