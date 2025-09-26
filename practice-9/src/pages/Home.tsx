import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <Link to="/books">View Books</Link>
    </main>
  );
};
