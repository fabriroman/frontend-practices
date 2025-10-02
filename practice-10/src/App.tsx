import { Routes, Route } from "react-router-dom";
import { Exercise1 } from "./pages/Exercise-1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/exercise-1" element={<Exercise1 />} />
      </Routes>
    </>
  );
}

export default App;
