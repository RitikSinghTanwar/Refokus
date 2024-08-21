import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
function Card({ width, para, heading, button,hover="none",active}) {
  return (
    <div className={`${width} hover:px-5 transition-all ease-linear duration-150 ${active ? 'hover:bg-zinc-700':'null'} bg-zinc-800 p-[1vw] hover:bg-violet-700 flex flex-col justify-between gap-[8vw] rounded-xl cursor-pointer overflow-hidden`}
    >
      <div className={`top_Part`}>
        <div className="TopHeading flex items-center justify-between">
          <div className="text-[1vw]">One Heading</div>
          <MdArrowRightAlt className="text-[2vw]" />
        </div>
        <div className=" text-[2vw]">Main Heading!</div>
      </div>
      <div className="Bottom_Part">
        {heading ? (
          <>
            <div className="Start_a_project mb-[1vw] text-[4vw] font-medium">
              Start a Project
            </div>
            <button className="px-4 py-2 rounded-full border-2 border-zinc-200 text-[1vw]">
              Contact Us
            </button>
          </>
        ) : null}
        {para ? (
          <div className="para text-[1vw]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
