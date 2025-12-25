import React from 'react';
import './bottle.css'

const Bottle = ({bottle,addHandleCart }) => {
    const {name,seller,price,stock,img} = bottle;

    return (

        <div className="bottle">
            <img src={img} alt="" />
            <p>Name : {name}</p>
            <p>Brand : {seller}</p>
            <p>Price : {price}</p>
            <p>Stock : {stock}</p>
            <button onClick={()=>addHandleCart(bottle)}>Add to cart</button>
            
        </div>
    );
};

export default Bottle;