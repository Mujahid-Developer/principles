import React from "react";

const Card = ({ children, dark }) => {
  return (
    <div
      className={
        dark
          ? "bg-slate-800 rounded-md py-3 px-4  text-white min-h-[8rem] flex flex-col justify-center"
          : "bg-yellow-300 rounded-md py-3 px-4  text-black min-h-[8rem] flex flex-col justify-center"
      }
    >
      {children}
    </div>
  );
};

export default Card;
