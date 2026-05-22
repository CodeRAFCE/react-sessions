import { useState } from "react";

function Counter() {
    debugger;
  const [count, setCount] = useState(0);

  // 🔴 BREAKPOINT 1: Runs every single time the function executes
    debugger;

  function handleClick() {
    // 🔵 BREAKPOINT 2: Runs only when you physically click the button
    setCount(prev => prev + 1);
    debugger;
  }

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Count: {count}</h1>
      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
