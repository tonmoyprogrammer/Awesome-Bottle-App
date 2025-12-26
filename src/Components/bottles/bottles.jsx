import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'
import { addId, allGetCart, removeItem } from '../../localStorage';
import Cart from '../cart';


const Bottles = ({bottles}) => {

    const getBottles = use(bottles);
    const [cart,addCart] = useState([]);

    const addHandleCart = (bottle)=>
    {
      const newCart =[...cart,bottle];
      addCart(newCart)
      addId(bottle.id)
    }

    const deleteCart = (id)=>
    {
       const addNewCart = cart.filter(cart=>cart.id !== id)
       addCart(addNewCart)
       removeItem(id);
    }

    useEffect(()=>
        {
            const allCart = allGetCart();
            const addRealCart = [];
            for(const id of allCart)
            {
                const newCartCheck = getBottles.find(bottle => bottle.id == id)
                if(newCartCheck)
                {
                    addRealCart.push(newCartCheck)
                }
            }
            addCart(addRealCart)
        },[getBottles])

    return (
        <div>
            <h2>Beautiful water bottle</h2>
            <h3>Total Bottles :{getBottles.length} </h3>
            <h4>Add your bottles : {cart.length}</h4>
            <Cart cart={cart} deleteCart={deleteCart}></Cart>
            
            <div className="">
            

            </div>


            <div className="bottles">
                {
                    getBottles.map(bottle=><Bottle key={bottle.id}bottle={bottle}
                    addHandleCart ={addHandleCart }
                    ></Bottle>)
                }
            </div>
            
        </div>
    );
};

export default Bottles;