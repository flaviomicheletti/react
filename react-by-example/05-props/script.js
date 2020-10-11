class HelloWorld extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello ' + this.props.name + ' world!!!')
    }
};

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, { name: 'John' }),
        React.createElement(HelloWorld, { name: 'Yoko' })
    ),
    document.getElementById('content')
);