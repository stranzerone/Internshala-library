import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadBooks } from './store/bookSlice.js';

import HomePage from './pages/HomePage.jsx';
import BrowseBooks from './pages/BrowseBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import AddBook from "./pages/AddBook.jsx";
import NotFound from './pages/NotFound.jsx';
import Navbar from "./components/Navbar.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch loadBooks to load books into the store on app load
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/books/details/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
