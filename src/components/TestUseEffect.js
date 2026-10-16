import { useEffect, useState } from "react";

const TestUseEffect = () => {
  const [count, setCount] = useState(0);

  /**
   * * With No Dependency Array useEffect will run on any each render
   * * With Empty dependency array useEffect will run on mount, The first render when page loads
   * * With count as a dependency useEffect will run on every update of the count state variable
   */
  useEffect(() => {
    console.log("with count as dependency array");
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Testing useEffect hook!</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      Your Count = {count}
    </div>
  );
};

export default TestUseEffect;
