import { Route, Routes } from "react-router-dom";
import { Exercise1 } from "./pages/Exercise-1";
import { Exercise2 } from "./pages/Exercise-2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
      </Routes>
    </>
  );
}

export default App;
