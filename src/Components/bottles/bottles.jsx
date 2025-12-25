import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'

const Bottles = ({bottles}) => {

    const getBottles = use(bottles);
    const [cart,addCart] = useState([]);
    const addHandleCart = (bottle)=>
    {
      const newCart =[...cart,bottle];
      addCart(newCart)
    }

    return (
        <div>
            <h2>Beautiful water bottle</h2>
            <h3>Total Bottles :{getBottles.length} </h3>
            <h4>add your bottles : {cart.length}</h4>
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