import React, { useState } from "react";

const Hooks = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? <h1>hello world</h1> : "nothing"}
      <button onClick={() => setShow(!show)}>click</button>
    </div>
  );
};

export default Hooks;
