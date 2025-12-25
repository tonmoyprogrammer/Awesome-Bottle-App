import React, { use } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'

const Bottles = ({bottles}) => {

    const getBottles = use(bottles);

    return (
        <div>
            <h2>Beautiful water bottle</h2>
            <h3>Total Bottles :{getBottles.length} </h3>
            <h4>add your bottles</h4>
            <div className=""></div>


            <div className="bottles">
                {
                    getBottles.map(bottle=><Bottle key={bottle.id}bottle={bottle}></Bottle>)
                }
            </div>
            
        </div>
    );
};

export default Bottles;