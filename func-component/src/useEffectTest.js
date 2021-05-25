import React, { useEffect, useState } from "react";

export function UseEffectTest() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const onHandleChange = ({ target: value }) => {
    setName(value);
  };

  useEffect(() => {
    console.log("NAME UPDATE 될때만!!");
  }, [name]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <input onChange={onHandleChange}></input>
    </div>
  );
}
