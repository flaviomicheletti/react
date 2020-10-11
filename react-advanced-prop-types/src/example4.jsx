/**
 * Exercise:
 *
 * Create a component that takes a user object as a prop, provides a default
 * value, validates that the prop is an object, and renders
 * "Hello firstName lastName!".
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const container = document.getElementById('container');

let ValidateHello = (props) => {
    return (
        <div>Hello {props.user.firstName} {props.user.lastName}</div>
    );
};

ValidateHello.defaultProps = {
    user: {}
};

ValidateHello.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    })
};

ReactDOM.render(<ValidateHello user={{ firstName: 123, lastName: 'Doe' }} />, container);
