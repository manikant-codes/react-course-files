export default function Football() {
  const sayHello = (name, e) => {
    alert("Hello ");
    console.log();
  };

  return (
    <>
      <button
        onClick={(e) => {
          sayHello("Manikant", e);
        }}
      >
        Take the shot!
      </button>
    </>
  );
}
