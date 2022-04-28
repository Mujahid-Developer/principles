import { useState, useEffect } from "react";
import client from "../client";
import Card from "../shared/Card";

const Principles = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="principles"]{
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
  console.log(postData);
  return (
    <>
      <h1 className="p-3 lg:py-3 text-2xl font-bold">Principles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-3 lg:px-0">
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
                  className="h-[10rem] w-full object-cover rounded-md"
                  src={imageUrl}
                  alt=""
                  srcset=""
                />
              </div>
              <div>
                <div className="text-sm flex gap-2 ">
                  <a
                    href={derivedUrl}
                    className="hover:underline text-blue-500"
                  >
                    Derived From
                  </a>
                  <a href={authorUrl} className="hover:underline text-blue-500">
                    @{author}
                  </a>
                </div>
                <div>
                  {/* {tags.map((tag) => (
                  <p>#{tag}</p>
                ))} */}
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </>
  );
};

export default Principles;
