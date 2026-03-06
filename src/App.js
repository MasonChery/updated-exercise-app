
import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import DistanceExercise from "./components/DistanceExercise";


function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  let screen = (
    <div>
      <h1>Fit Routine</h1>
      <p>Select an Exercise:</p>

      <button onClick={() =>
        setSelectedExercise({ name: "Pushups", type: "repetition" })
      }>
        Pushups
      </button>

      <button onClick={() =>
        setSelectedExercise({ name: "Squats", type: "repetition" })
      }>
        Squats
      </button>

      <button onClick={() =>
        setSelectedExercise({ name: "Wall Sits", type: "duration" })
      }>
        Wall Sits
      </button>

      <button onClick={() =>
        setSelectedExercise({ name: "planks", type: "duration" })
      }>
        Planks
      </button>
      <button onClick={() =>
        setSelectedExercise({ name: "Biking", type: "distance" })
      }>
        Biking
      </button>

    </div>
  );

  // SECOND SCREEN
  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = (
        <RepetitionExercise name={selectedExercise.name} 
        goBack={() => setSelectedExercise(null)}/> 
      );
    }
    if (selectedExercise.type === "duration") {
      screen = (
        <DurationExercise name={selectedExercise.name} />
      );
    }

     if (selectedExercise.type === "distance") {
      screen = (
        <DistanceExercise name={selectedExercise.name} 
        goBack={() => setSelectedExercise(null)}/>
      );
    }
  }
  return <div className="App">{screen}</div>;
}

export default App;
