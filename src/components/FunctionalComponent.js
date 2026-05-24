import { useEffect } from "react";

const FunctionalComponent = ({ user }) => {
  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   console.log("Interval called");
    // }, 2000);
    return () => {
      console.log("Component unmounted, clearing interval");
    //   clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="user-card">
      <h2>Name: {user.name} Function</h2>
      <h3>Age: {user.age}</h3>
      <p>Occupation: {user.occupation}</p>
    </div>
  );
};

export default FunctionalComponent;
