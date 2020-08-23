/**
 * Exercise:
 *
 * Create a component that takes a user's first and last name and renders
 * "Hello Jane Doe!" (assuming first name is Jane and last name is Doe).
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('container');

let SayHello = (props) => {
    return (
        <div>Hello {props.firstName} {props.lastName}!</div>
    );
};

ReactDOM.render(<SayHello firstName="Jane" lastName="Doe" />, container);
