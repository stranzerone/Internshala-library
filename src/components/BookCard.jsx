import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <Link to={`/books/details/${book.id}`} className="block p-4 border rounded bg-white shadow hover:bg-gray-50">
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
    </Link>
  );
}

export default BookCard;
