import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {

  constructor(props) {
    console.log("1. constructor is called here");
    super(props);
    this.state = {"foo": "beca"};
    this.state.foo = "lish";
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps called here");
    return null;
  }

  //
  //
  //
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update is called here!");
    return nextState.cars.length < this.state.cars.length;
  }

  render() {
    console.log("3. render method is called here");
    return <div>Hello world!</div>
  }

  componentDidMount() {
    console.log("4. componentDidMount was called here");
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("5. getSnapshotBeforeUpdate was called here!");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("6. componentDidUpdate was called here!");
  }

  //
  //
  //
  componentWillUnmount(){
    console.log("componentWillUnmount was called here!");
  }

  //
  //
  //
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  //
  //
  //
  componentDidCatch(error, info) {
    console.log(info.componentStack);
  }

}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('container')
);
