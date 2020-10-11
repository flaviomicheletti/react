/**
 * Often you will want to validate that properties that are provided to your
 * component. This could be anything from verifying the data type of a prop,
 * or could be indicating that a prop is required. React provides a mechanism
 * for specifying the validation of props as well as providing default values
 * in the event that a prop isn't required and no value is provided. This is
 * done using `propTypes` and `defaultProps`.
 *
 * See https://facebook.github.io/react/docs/reusable-components.html#prop-validation
 *
 * Example:
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const container = document.getElementById('container');

let OrderDetail = (props) => {
    return (
        <div>
            <div>Order Number: {props.order.number}</div>
            <div>Quantity: {props.order.quantity}</div>
            <div>Order Total: {props.order.quantity * props.product.price}</div>
            <div>Product: {props.product.name}</div>
            <div><img src={props.product.imageUrl} /></div>
        </div>
    );
};

OrderDetail.defaultProps = {
    order: {},
    product: {}
};

OrderDetail.propTypes = {
    order: PropTypes.object,
    product: PropTypes.object
};

ReactDOM.render(<OrderDetail />, container);