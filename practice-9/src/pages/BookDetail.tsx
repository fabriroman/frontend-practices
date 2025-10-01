import { Link, useNavigate, useParams } from "react-router-dom";
import { books } from "../data/books";
import { useEffect } from "react";

export const BookDetail = () => {
  const navigate = useNavigate();
	
  const { id } = useParams();
  const bookId = Number(id);
  const book = books.find((book) => book.id === bookId);


	useEffect(() => {
		if (!book) {
			navigate("/404", { state: { isBookNotFound: true } });
		}
	}, [book, navigate]);	

	if (!book) {
		return null;
	}

  return (
    <main>
      <h1>Book Detail</h1>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <Link to="/books">Back to Books</Link>
    </main>
  );
};
