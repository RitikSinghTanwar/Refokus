import React from "react";

function Stripe({value}){

    return (
        <div className="border-t-2 border-b-2 border-r-2 border-zinc-700 h-[100%] w-[16.66%] flex items-center justify-between px-[1.5vw] overflow-hidden">
            {/* <img className="h-[8vw] invert" src={value.url} alt="" /> */}
            <div className="font-semibold text-[1.2vw] font-['Satoshi_Regular']">{value.name}</div>
            <div className="font-semibold text-[1vw]">{value.number}</div>
        </div>
    )
}

export default Stripe;