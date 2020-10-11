import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('container');

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    container
);