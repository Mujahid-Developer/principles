import React from "react";

const Card = ({ children, dark }) => {
  return (
    <div
      className={
        dark
          ? "bg-slate-800 rounded-md  p-5 text-white min-h-[8rem] flex flex-col justify-start gap-2"
          : "bg-yellow-300 rounded-md p-5  text-black min-h-[8rem] flex flex-col justify-start gap-2"
      }
    >
      {children}
    </div>
  );
};

export default Card;
