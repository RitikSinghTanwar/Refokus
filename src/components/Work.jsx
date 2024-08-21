import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Work() {
  
  const images = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203-p-800.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203-p-800.webp",
      top: "56%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203-p-800.webp",
      top: "60%",
      left: "59%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d000c5875a51723e197f_Brightwave%20-%204%203-p-800.webp",
      top: "68%",
      left: "63%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203-p-800.webp",
      top: "70%",
      left: "43%",
      isActive: false,
    },
  ];

  const [Images,setImages] = useState(images);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showAndHideImages(Math.floor(latest*100)); 
  });

  function showAndHideImages(scrollValue) {
    setImages((prevImages) => {
      return prevImages.map((image, index) => {
        // Originally it is scrollValue > index
        if (scrollValue > index+2) {
          return { ...image, isActive: true };
        } else {
          return { ...image, isActive: false };
        }
      });
    });
  }

  // Gsap Animation Code:
  useGSAP(()=>{
    var tl = gsap.timeline();
    tl.from(".work h1",{
      y:500,
      opacity:0,
      scale:0.3,
      duration:.5,
      delay:1,
      stagger:.2
    })
  })

  return (
    <div className="relative w-[70vw] mx-auto font-medium flex items-center justify-center font-['Satoshi'] leading-none select-none overflow-hidden">
      <div className="work w-full h-full text-[25vw] flex">
        <h1>m</h1>
        <h1>e</h1>
        <h1>ǒ</h1>
        <h1>w</h1>
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        {Images.map((item, index) => {
          return item.isActive ? (
            <div
              key={index}
              style={{ top: item.top, left: item.left }}
              className="absolute h-[17vw] -translate-x-[50%] -translate-y-[50%]"
            >
              <img
                src={item.url}
                alt=""
                className="rounded-lg w-full h-full object-cover object-center"
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Work;
