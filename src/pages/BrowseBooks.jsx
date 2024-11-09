import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  // Convert `category` parameter to lowercase for case-insensitive matching
  const normalizedCategory = category ? category.toLowerCase() : null;

  // First, filter by category, then further filter by search input if provided
  const filteredBooks = books
    .filter((book) => {
      // Check if category matches, only if a category is provided in the URL
      return normalizedCategory ? book.category.toLowerCase() === normalizedCategory : true;
    })
    .filter((book) => {
      // Further filter by search input, if provided
      return search
        ? book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
        : true;
    });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-600">
        {category ? `Category: ${category}` : 'Browse Books'}
      </h1>
      
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or author"
        className="block w-full p-2 mt-4 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
