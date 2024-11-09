import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Welcome to the Online Library</h1>
      
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/books/fiction" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <span className="text-blue-600 font-medium text-lg">Fiction</span>
          </Link>
          <Link to="/books/non-fiction" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <span className="text-blue-600 font-medium text-lg">Non-Fiction</span>
          </Link>
          <Link to="/books/sci-fi" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <span className="text-blue-600 font-medium text-lg">Sci-Fi</span>
          </Link>
          <Link to="/books/adventure" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200">
            <span className="text-blue-600 font-medium text-lg">Adventure</span>
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/books/fiction" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <span className="text-yellow-600 font-medium text-lg">The Great Gatsby</span>
          </Link>
          <Link to="/books/sci-fi" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <span className="text-yellow-600 font-medium text-lg">Dune</span>
          </Link>
          <Link to="/books/non-fiction" className="bg-yellow-100 p-4 rounded-lg text-center hover:bg-yellow-200">
            <span className="text-yellow-600 font-medium text-lg">Sapiens</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
