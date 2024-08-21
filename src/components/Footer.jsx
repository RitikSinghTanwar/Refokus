import React from "react";

function Footer(){

    return (
        <div className="w-full flex p-[2vw] items-center gap-[5vw] bg-zinc-900 overflow-hidden pb-[5vw]">
            <div className="left_Footer w-[50%] px-[5vw] text-[12vw] font-semibold tracking-normal">refokus.</div>
            <div className="right_Footer w-[50%] flex gap-[5vw]">
                <div className="footer1 flex flex-col gap-[1vw]">
                    <h4 className="text-[1.3vw] text-zinc-500 mb-[2vw]">Social</h4>
                    {["Instagram", "Twitter (x7)", "LinkedIn"].map((item,index)=>{
                        return <a key={index} href="" className="text-zinc-700v text-[1vw]">{item}</a>
                    })}
                </div>
                <div className="footer2 flex flex-col gap-[1vw]">
                    <h4 className="text-[1.3vw] text-zinc-500 mb-[2vw]">Sitemap</h4>
                    {["Home", "Work", "Careers","Contact"].map((item,index)=>{
                        return <a key={index} href="" className="text-zinc-400 text-[1vw]">{item}</a>
                    })}
                </div>
                <div className="footer3 flex flex-col w-[30%] gap-5 self-end">
                    <div className="para  text-[1vw]">Refokus is pioneering digital agency driven by design and empowered by technology.</div>
                    <button className="bg-blue-600 px-4 py-3 text-[1vw] leading-none">Enterprise Partner</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;