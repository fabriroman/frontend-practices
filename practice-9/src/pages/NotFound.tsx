import { Link, useLocation } from "react-router-dom";

export const NotFound = () => {
  const location = useLocation();
  const isBookNotFound = location.state?.isBookNotFound;

  return (
    <main>
      <h1>{isBookNotFound ? "Book not found" : "Page not found"}</h1>
      <p>{isBookNotFound ? "The book you're looking for doesn't exist." : "We couldn't find what you're looking for."}</p>
      <Link to={isBookNotFound ? "/books" : "/"}>
        {isBookNotFound ? "Back to Books" : "Back to Home"}
      </Link>
    </main>
  );
};
