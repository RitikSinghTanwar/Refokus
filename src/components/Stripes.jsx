import React from "react";
import Stripe from "./Stripe"

function Stripes(){

    const stripeData = [
        {name:"⌂GSAP",number:48},
        {name:"AWWWARDS.",number:12},
        {name:"INSTAGRAM",number:56},
        {name:"RAZORPAY◯",number:42},
        {name:"REDDRAGON",number:1},
        {name:"KAWASAKI",number:55},
    ]

    return (
        <div className="h-[5vw] w-full flex mt-11 overflow-hidden">
            {stripeData.map((item,index)=>{
                return <Stripe key={index} value={item}/>
            })}
        </div>    
    )
}

export default Stripes;