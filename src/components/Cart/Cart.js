import React from 'react';
import Booked from '../Booked/Booked';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let total = 0;

    for(const person of cart){
        total = total + person.salary;
    }
    
    return (
        <div className="cart">

            <h5>Scientist Added: {props.cart.length}</h5>
            <br />
            <h5>Total Salary: ${total}</h5>
            <br />
            <h4>Scientist List</h4>
            {
                cart.map(booked => <Booked
                key={booked.key}
                booked={booked}></Booked>)
            }
        </div>
    );
};

export default Cart;