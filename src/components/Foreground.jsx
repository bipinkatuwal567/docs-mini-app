import React, { useRef } from "react";
import Card from "../ui/Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: ".45mb",
      close: true,
      tag: {
        tagTitle: "Download Now",
        isOpen: true,
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: ".89mb",
      close: true,
      tag: {
        tagTitle: "Download Now",
        isOpen: false,
        tagColor: "blue",
      },
    },
    {
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: ".12mb",
      close: false,
      tag: {
        tagTitle: "Download Now",
        isOpen: true,
        tagColor: "blue",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed flex p-5 gap-10 flex-wrap top-0 left-0 w-full h-full z-20"
    >
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
