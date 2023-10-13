import React, { useEffect, useState } from "react";
import AlbumArt from "./AlbumArt";

function UseEffectFetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.slice(0, 50));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="container">
        <h1>Loading...</h1>;
      </div>
    );

  if (!loading && error)
    return (
      <div className="container">
        <h1>Something went wrong!</h1>
      </div>
    );

  if (!data)
    return (
      <div className="container">
        <h1>No Data</h1>
      </div>
    );

  console.log(data);

  return (
    <div className="container">
      <div class="row gx-5 gy-5">
        {data.map((item, index) => {
          return <AlbumArt key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default UseEffectFetchExample;
