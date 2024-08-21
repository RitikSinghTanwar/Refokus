import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Cursor(){

    // Gsap animation code:
    // useGSAP(()=>{
    //     document.addEventListener("mousemove",(dets)=>{
    //         console.log(dets);
    //         gsap.to(".cursor",{
    //             x:dets.X,
    //             y:dets.Y
    //         })
    //     })
    // })

    useEffect(()=>{
        document.addEventListener("mousemove",(dets)=>{
            gsap.to(".cursor",{
                x: dets.clientX,
                y: dets.clientY
            })
        })
    },[])

    return (
        <div className="cursor mix-blend-difference fixed z-[100000] w-[2vw] h-[2vw] bg-white rounded-full"></div>
    )
}

export default Cursor;