import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams(); // Get bookId from URL params
  console.log(id, 'id'); // Debugging to see the id value

  // Fetch the book by matching the id
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id == parseInt(id)) // Find the book by ID
  );

  return (
    <div className="container mx-auto p-6">
      {book ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-600">{book.title}</h1>
          <p className="text-xl text-gray-700 mt-2">Author: <span className="font-semibold">{book.author}</span></p>
          
          <div className="mt-6">
            <p className="text-lg text-gray-800 font-semibold">Description:</p>
            <p className="mt-2 text-gray-600">{book.description}</p>
          </div>

          <p className="mt-6 text-lg text-gray-800">
            <span className="font-semibold">Rating:</span> {book.rating} / 5
          </p>

          <Link 
            to="/browse" 
            className="mt-8 inline-block text-blue-500 hover:text-blue-700 font-semibold text-lg transition"
          >
            &#8592; Back to Browse
          </Link>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Book not found</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
