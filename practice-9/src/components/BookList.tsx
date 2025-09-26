import { Link } from "react-router-dom";
import { books } from "../data/books";

export const BookList = () => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>
            {book.description.length > 50
              ? book.description.slice(0, 50) + "…"
              : book.description}
          </p>
          <Link to={`/books/${book.id}`}>View details</Link>
        </li>
      ))}
    </ul>
  );
};
