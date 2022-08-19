import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    return (
        <div>
            <h3>This is Cart : {cart}</h3>
        </div>
    );
};

export default Cart;