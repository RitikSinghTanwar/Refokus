import React from "react";
import Card from "./Card"
function Cards(){

    return (
        <div className="bg-zinc-900 w-[100%] overflow-hidden">
            <div className="w-[70vw] mx-auto flex gap-1 pb-[5vw] pt-[10vw] bg-zinc-900"> 
            <Card width={"w-[35%]"} para={true} heading={false} button={false} active={true} />
            <Card width={"w-[65%]"} para={false} heading={true} button={true} hover={"bg-violet-700"}/>
            </div>
        </div>
    )
}

export default Cards;