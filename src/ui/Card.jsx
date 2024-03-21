import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] overflow-hidden bg-zinc-900/90 text-zinc-200 p-8"
    >
      <FaRegFileAlt />
      <p className="mt-8 text-sm leading-2">{data.description}</p>

      <div className="absolute left-0 bottom-0 w-full">
        <div className="w-full px-8 flex justify-between items-center mb-5">
          <p className="text-sm">{data.fileSize}</p>
          <span className=" cursor-pointer">
            {data.close ? (
              <IoClose size="1.2rem" />
            ) : (
              <MdDownloadForOffline size="1.3rem" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`py-3.5 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            <p className="text-center text-sm cursor-pointer">
              {data.tag.tagTitle}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
