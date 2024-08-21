import React from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NavBar() {

  // Gsap Animation Code:
  useGSAP(()=>{
    var tl = gsap.timeline();
    tl.from(".NavBar .nav_left ,.NavBar .Links",{
      y:-100,
      stagger:.3
    })
  })

  return (
    <div className="NavBar w-[70vw] p-3 mx-auto flex justify-between items-center  border-b-[.1vw] border-zinc-700 overflow-x-hidden">
      <div className="nav_left flex items-center w-[100%]">
        <img
          className="invert h-[1.2vw]"
          src="https://cdn.prod.website-files.com/5dbfbe5b9bf13e1ebb54e91f/60524e07591b9057c241c060_refokus-logo-black.svg"
          alt=""
        />
        <div className="Links flex gap-[2vw] ml-20">
          {["Home", "Works", "Culture", "", "News"].map((item, index) =>
            item.length === 0 ? (
              <span key={index} className="h-7 w-[.2vw] bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="relative text-[1vw] flex items-center gap-1 before:absolute before:bg-zinc-300 before:top-[100%] before:h-[.1vw] before:w-0 hover:before:w-full before:transition-all before:ease-linear before:duration-300"
                href=""
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.50em #00FF19" }}
                    className="flex h-2 w-2 bg-green-500 rounded-full"
                  ></span>
                ) : null}
                {item}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default NavBar;
