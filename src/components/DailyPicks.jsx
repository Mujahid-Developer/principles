import React from "react";
import Card from "../shared/Card";

const DailyPicks = () => {
  const principles = [
    {
      title: "Take bold risks, don't care.",
      author: "Elon Musk",
    },
    {
      title: "Take bold risks, don't care.",
      author: "Elon Musk",
    },
    {
      title: "Take bold risks, don't care.",
      author: "Elon Musk",
    },
  ];

  return (
    <>
      <h1 className="p-3 lg:py-3 text-2xl font-bold">Daily Picks</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-3 lg:px-0">
        {principles.map(({ title, author }) => (
          <Card>
            <h1 className="font-bold text-xl leading-tight">{title}</h1>
            <p className="font-medium mt-1">-{author}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DailyPicks;
