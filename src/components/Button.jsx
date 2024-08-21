import React from "react";
import { IoIosReturnRight } from "react-icons/io";
function Button({title="Start a Project"}) {

  return (
    <div className="cursor-pointer w-fit px-[1vw] py-[.5vw] bg-zinc-200 text-black rounded-full flex items-center gap-5">
      <span className="text-[1vw] font-medium text-nowrap">{title}</span>
      <IoIosReturnRight className="text-[1.5vw]" /> 
    </div>
  );
}

export default Button;
