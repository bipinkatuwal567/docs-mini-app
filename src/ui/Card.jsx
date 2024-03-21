import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

function Card() {
  return (
    <div className="relative w-60 h-72 rounded-[45px] overflow-hidden bg-zinc-900/90 text-zinc-200 p-8">
      <FaRegFileAlt />
      <p className="mt-5 text-sm leading-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      <div className="absolute left-0 bottom-0 w-full">
        <div className="w-full px-8 flex justify-between items-center mb-4">
           <p className="text-sm">.95mb</p> 
           <span>
            <MdDownloadForOffline size="1.5rem" />
           </span>
        </div>
        <div className="py-3.5 bg-green-500">
            <p className="text-center text-sm">Download Now</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
