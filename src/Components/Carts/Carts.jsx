/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import './Carts.css'
import Selected from "../Selected/Selected";


const Carts = ({handleAdd, selectName, totalCost}) => {
    const [carts, setCarts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <main className="container mx-auto flex flex-col lg:flex-row text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4">
            {
                carts.map(cart => <Cart key={cart.id} cart={cart} handleAdd={handleAdd} ></Cart>)
            }
        </div>
        {/* select item */}
        <div className=" ml-5 w-1/4">
        <h1 className="text-center text-3xl font-bold">Total Budget: $20000</h1>
            <hr />
        <h1>Total cost: ${totalCost}</h1>
            {
                selectName.map((select, idx) => <Selected key={idx} select={select}></Selected>)
            }
        </div>
        </main>
    );
};

export default Carts;