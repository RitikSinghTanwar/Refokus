import React from "react";
import Button from "./Button";

function Product({value,mover,index}){

    return ( 
        // Height should be fixed To get the window effect: i.e h-[20vw]
        <div onMouseEnter={()=>mover(index)} className="max-w-[100%] h-[20vw] flex items-center px-[10vw] py-[4vw] justify-between text-white overflow-hidden">
            <div className="title text-[3vw] font-medium">{value.title}</div>
            <div className="right_part w-[30%]">
                <div className="para text-[1vw] mb-[2vw] w-[80%]">{value.desc}</div>
                <div className="flex gap-5 w-[100%]">
                    {value.live && <Button title="Live"/>}
                    {value.case && <Button title="Case Study"/>}
                </div>
            </div>
        </div>
    )
}

export default Product;