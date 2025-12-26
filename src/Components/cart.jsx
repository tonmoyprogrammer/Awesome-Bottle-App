import React from 'react';
import './bottle/cart.css'

const Cart = ({cart,deleteCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(cart=><div className='cart'>
                    <img src={cart.img} alt="" />
                    <button onClick={()=>deleteCart(cart.id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Cart;