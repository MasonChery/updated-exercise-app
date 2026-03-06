import React, { useState } from "react";

function RepetitionExercise({ name, goBack}) {
  const [count, setCount] = useState(0); 

  return (
    <div>
      
      <h1>{name}</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
      <button onClick={goBack}>
        Return
      </button>
    </div>
  );
}

export default RepetitionExercise;
