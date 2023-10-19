import React, { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div className="demoContainer">
      <div className="demoWrapper">
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button onClick={increment}>+</button>
            Count: {count}
          </div>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    </div>
  );
}

export default UseMemoDemo;
