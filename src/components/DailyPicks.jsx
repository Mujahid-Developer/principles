import React, { useEffect, useState } from "react";
import client from "../client";
import Card from "../shared/Card";
import Spinner from "../shared/Spinner";

const DailyPicks = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="dailypicks"]{
          _id,
          title,
          description,
          imageUrl,
          author,
          authorUrl,
          derivedUrl,
          tags
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1 className="p-3 lg:py-3 text-2xl  mt-8 font-bold">Daily Picks</h1>
      {postData.length === 0 ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 px-3 lg:px-0">
          {postData.map(
            ({
              title,
              author,
              description,
              _id,
              tags,
              imageUrl,
              authorUrl,
              derivedUrl,
            }) => (
              <Card dark key={_id}>
                <h1 className="font-bold text-xl mb-1">{title}</h1>
                <h1 className="font-normal text-md ">{description}</h1>
                <div>
                  <img
                    className="h-[14rem] w-full object-cover rounded-md"
                    src={imageUrl}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="flex flex-wrap justify-between gap-2 items-center mt-3">
                  <div className="text-sm flex gap-2 ">
                    <a
                      href={derivedUrl}
                      className="hover:underline text-blue-500"
                    >
                      Derived From
                    </a>
                    <a
                      href={authorUrl}
                      className="hover:underline text-blue-500"
                    >
                      @{author}
                    </a>
                  </div>
                  {!tags ? null : (
                    <div className="flex gap-1">
                      {tags.map((tag) => (
                        <button className="text-slate-500 text-xs bg-slate-900 w-fit py-1 px-2 rounded-md">
                          #{tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            )
          )}
        </div>
      )}
    </>
  );
};

export default DailyPicks;
