class HelloWorld extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello ' + this.props.name + ' world!!!')
    }
};

ReactDOM.render(
    <div>
        <HelloWorld name='John' />
        <HelloWorld name='Yoko' />
    </div>,
    document.getElementById('content')
);
