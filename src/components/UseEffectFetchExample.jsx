import React from "react";
import useFetch from "../customHooks/useFetch";
import AlbumArt from "./AlbumArt";

function UseEffectFetchExample() {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

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

  const photos = data.slice(0, 50);

  return (
    <div className="container">
      <div class="row gx-5 gy-5">
        {photos.map((item, index) => {
          return <AlbumArt key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default UseEffectFetchExample;
