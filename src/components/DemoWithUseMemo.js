import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helpers";

const DemoWithUseMemo = () => {
  const [text, setText] = useState(0);
  const [count, setCount] = useState(0);

  // after 1234567 it took few seconds to execute the result
  // const prime = () => {
  //   console.log("Calculating prime numeber off", text);
  //   return findNthPrime(Number(text));
  // };

  //Now Each time i click on count button prime() is executed.
  //Since the prime() execution is heavy after the 6th number the page freezes
  //Because on each state update the component is re-rendered (Reconciliation process)
  //Heavier the operation the longer page freeze and causes bad UX

  // Now using useMemo hook to optimize the delay when re-rendering for unwanted state updates
  // useMemo return a value not a function.
  // Memoize it only change it when my text changes
  // This will cutoff when unrelated state get updated
  const prime = useMemo(() => findNthPrime(Number(text)), [text]);

  return (
    <div className="demoContainer">
      <h1>DemoWithUseMemo</h1>

      <div>
        <button
          className="demoButton"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count
        </button>
        <span>{count}</span>
      </div>

      <div>
        <input
          className="demoInput"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="demoPrimeNumber">nth Prime: {prime}</div>
    </div>
  );
};

export default DemoWithUseMemo;
