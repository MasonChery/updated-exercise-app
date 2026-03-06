import React, { useState } from "react";

function DistanceExercise({ name, goBack}) {
  const [distance, setDistance] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{distance} miles</h2>
      <button onClick={() => setDistance(distance + 1)}>
        Add Mile
      </button>
       <button onClick={() => setDistance(0)}>
        Reset
      </button>
      <button onClick={goBack}>
        Return
      </button>
      
    </div>
  );
}
export default DistanceExercise;
