import React from "react";

function List() {
  const name = ["Kishan", "Vicky", "Pinky", "Jash"];

  const modifiedNames = name.map((item, index) => {
    return <h1 key={index}>{item}</h1>;
  });

  console.log(modifiedNames);

  return (
    <div>
      {name.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </div>
  );
}

export default List;



// const [counter, setCounter] = useState(0);

// useEffect(() => {
//   setTimeout(() => {
//     setCounter(counter + 1);
//   }, 1000);
// }, [counter]);








// const [width, setWidth] = useState(window.innerWidth);

// useEffect(() => {
//   function handleResize() {
//     setWidth(window.innerWidth);
//   }
//   window.addEventListener("resize", handleResize);

//   // Cleanup Function
//   return function () {
//     window.removeEventListener("resize", handleResize);
//   };
// }, [width]);
