import React from "react";
import Marquee from "./Marquee";
function Marquees() {
  const imageData = [
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9072_633c148ad1bb7f022754664e_626be03929598bb074de4cc1_Remind.webp",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8cf9_633c14897f94fe831be72dad_61957e2b14f8c6babe1e0a4c_doxel.svg",
    ],
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9072_633c148ad1bb7f022754664e_626be03929598bb074de4cc1_Remind.webp",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8cf9_633c14897f94fe831be72dad_61957e2b14f8c6babe1e0a4c_doxel.svg",
    ],
  ];

  return (
    <div className="flex flex-col gap-[2vw] pt-[5vw] pb-[10vw] w-full bg-zinc-900 overflow-hidden">
      {imageData.map((item,index)=>{
        return <Marquee key={index} index={index} imageData={item} />
      })}
    </div>
  );
}

export default Marquees;
