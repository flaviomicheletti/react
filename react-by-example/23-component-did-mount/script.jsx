'use strict';

class UserGist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      lastGistUrl: ''
    }
  }

  componentDidMount() {
    // $.get(this.props.source, function(result) {
    //   var lastGist = result[0];
    //   this.setState({
    //     username: lastGist.owner.login,
    //     lastGistUrl: lastGist.html_url
    //   });
    // }.bind(this));

    axios.get(this.props.source)
    .then(function (result) {
      var lastGist = result.data[0];
      console.log(lastGist);
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));

    // .catch(function (error) {
    //   console.log(error);
    // })
    // .then(function () {
    //   console.log("always executed");
    // });

  }

  render() {
        return(
      <div>
      { this.state.username }'s last gist is <a href={this.state.lastGistUrl}>here</a>.
      </div >
    );
  }
}

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('content')
);