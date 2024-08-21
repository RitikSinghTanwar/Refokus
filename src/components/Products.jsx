import React, { useState } from "react";
import Product from "./Product";
import { easeIn, motion } from "framer-motion";

function Products() {
  const product = [
    {
      title: "Arqitel",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque necessitatibus nulla asperiores, at voluptate repellendus nihil aspernatur minus deleniti!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque necessitatibus nulla asperiores, at voluptate repellendus nihil aspernatur minus deleniti!",
      live: true,
      case: true,
    },
    {
      title: "YIR 2024",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque necessitatibus nulla asperiores, at voluptate repellendus nihil aspernatur minus deleniti!",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque necessitatibus nulla asperiores, at voluptate repellendus nihil aspernatur minus deleniti!",
      live: true,
      case: false,
    },
    {
      title: "Awwwards.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque necessitatibus nulla asperiores, at voluptate repellendus nihil aspernatur minus deleniti!",
      live: true,
      case: false,
    },
  ];

  const videoData = [
    {
      videoUrl:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm",
    },
    {
      videoUrl:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm",
    },
    {
      videoUrl:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-43.webm",
    },
    {
      videoUrl:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/brightwave-43.webm",
    },
    {
      videoUrl:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm",
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (index) => {
    setPos(index * 20);
  };

  return (
    <div className="relative flex flex-col bg-zinc-900 pt-[4vw] w-full min-h-[100vh] overflow-hidden">
      {product.map((item, index) => {
        return <Product key={index} value={item} mover={mover} index={index} />;
      })}
      <div className="ProductsCover w-[100%] h-[100%] absolute pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `vw` }}
          transition={{ease:easeIn,duration: .4}}      
          className="absolute overflow-hidden Window w-[30vw] h-[20vw]  left-[30%] translate-y-[0vw] rounded-xl"
        >
            {videoData.map((item,index)=>{
                return <motion.div animate={{y:-pos+`vw`}} key={index} className="SingleWindow w-full h-full">
                    <video className="w-full h-full object-cover" src={item.videoUrl} loop muted autoPlay></video>
                </motion.div>
            })}
          
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
