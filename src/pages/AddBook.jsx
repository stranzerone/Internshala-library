import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !description || !category || !rating) {
      setError('All fields are required');
      return;
    }

    const newBook = { 
      id: uuidv4(), // Generate a unique ID using uuid
      title,
      author,
      description,
      category,
      rating
    };
    dispatch(addBook(newBook));
    navigate('/browse');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-600">Add a New Book</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full p-2 mt-2 border rounded"></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Rating</label>
          <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
        </div>
        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
