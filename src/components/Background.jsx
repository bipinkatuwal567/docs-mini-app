import React from "react";

function Background() {
  return (
    <div className="fixed w-full h-full z-10">
      <div className="absolute top-[5%] w-full flex justify-center py-10 text-zinc-600 text-xl">
        Documents.
      </div>
      <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-zinc-900">
        Docs.
      </h2>
    </div>
  );
}

export default Background;
