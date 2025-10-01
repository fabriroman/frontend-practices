import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { BookDetail } from "./pages/BookDetail";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
