import React, { useRef } from "react";

const Hooks = () => {
  const previousCountRef = useRef(0);
  let count = 0;
  function incrementCount() {
    count++;
    previousCountRef.current = count;
    console.log("Current count:", count);
    console.log("Previous count:", previousCountRef.current);
  }
  return (
    <div>
      {" "}
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Hooks;
