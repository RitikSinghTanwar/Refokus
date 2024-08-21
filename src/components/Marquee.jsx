import { motion } from "framer-motion";
import React from "react";

function Marquee({ imageData, index }) {
  return (
    <motion.div
      className="invert w-[100%] flex gap-[6vw] p-[1vw]"
      initial={{ x: index === 1 ? "-120%" : "0%"}}
      animate={{ x: index === 1 ? "10%" : "-120%" }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity }}
    >
      {imageData.map((value, index) => {
        return (
          <img key={index} className="h-[2vw] flex-shrink-0" src={value} />
        );
      })}
      {imageData.map((value, index) => {
        return (
          <img key={index} className="h-[2vw] flex-shrink-0" src={value} />
        );
      })}
      {imageData.map((value, index) => {
        return (
          <img key={index} className="h-[2vw] flex-shrink-0" src={value} />
        );
      })}
      {imageData.map((value, index) => {
        return (
          <img key={index} className="h-[2vw] flex-shrink-0" src={value} />
        );
      })}
    </motion.div>
  );
}

export default Marquee;
