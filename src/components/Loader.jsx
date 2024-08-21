import React from "react";

function Loader(){
    
    return (
        <div className="w-full h-screen bg-black text-white text-[10vw] flex items-center justify-center">
            <img className="h-[15vw] invert rotate-180" src="src\assets\CAT_GIF_2.gif" alt="" />
        </div>
    )
}

export default Loader;