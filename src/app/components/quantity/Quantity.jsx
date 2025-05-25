"use client";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Quantity = () => {
    const [quantity, setQuantity]=useState(1)

    return (
       <div className="flex gap-2 items-center">
                        <span>Quantity</span>
                        <span className="text-2xl secondary" onClick={()=>setQuantity(q=>Math.max(1,q-1))}>
                            <IoIosArrowBack />
                        </span>
                       <input
                       value={quantity}
                       onChange={()=>setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        type="" className="input w-8 border-0 text-center hover:outline-none focus:outline-none" 
                        />
                        
                        <span  className="text-2xl secondary" onClick={()=>setQuantity(q=>Math.max(1,q+1))}>
                            <IoIosArrowForward />
                        </span>

                    </div>
    );
};

export default Quantity;