import { Route, Routes } from "react-router-dom";
import { Exercise1 } from "./pages/Exercise-1";
import { Exercise2 } from "./pages/Exercise-2";
import { Exercise3 } from "./pages/Exercise-3";

function App() {
  return (
    <>
      <Routes>
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
        <Route path="/exercise-3" element={<Exercise3 />} />
      </Routes>
    </>
  );
}

export default App;
