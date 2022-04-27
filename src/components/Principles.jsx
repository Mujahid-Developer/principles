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
      author,
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
        {postData.map(({ title, author, description, _id, tags }) => (
          <Card dark key={_id}>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <h1 className="font-normal text-md ">{description}</h1>
            <div>
              <div className="text-sm flex gap-2">
                <a href="#top">Derived From</a>
                <a href="#top">@{author}</a>
              </div>
              <div>
                {/* {tags.map((tag) => (
                  <p>#{tag}</p>
                ))} */}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Principles;
