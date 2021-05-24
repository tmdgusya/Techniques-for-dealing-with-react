import React, { useState } from "react";

export function Profile() {
  const [state, setName] = useState({ name: "", age: "20" });

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={(e) => setName({ ...state, name: e.target.value })}
      />
    </div>
  );
}
