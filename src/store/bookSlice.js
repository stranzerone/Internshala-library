import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
  },
});

export const { setBooks, addBook, removeBook } = booksSlice.actions;

// Thunk to load books on homepage load
export const loadBooks = () => (dispatch) => {
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A novel about racial injustice in the Deep South.", rating: 4.8, category: "Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society ruled by Big Brother.", rating: 4.7, category: "Sci-Fi", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A story of the wealthy Jay Gatsby and his love for Daisy Buchanan.", rating: 4.6, category: "Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 4, title: "Moby Dick", author: "Herman Melville", description: "The narrative of Captain Ahab's obsession with the white whale.", rating: 4.3, category: "Adventure", imageUrl: "https://via.placeholder.com/150" },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", description: "A romantic novel that also critiques British landed gentry.", rating: 4.9, category: "Romance", imageUrl: "https://via.placeholder.com/150" },
    { id: 6, title: "Brave New World", author: "Aldous Huxley", description: "A novel set in a dystopian future society.", rating: 4.5, category: "Sci-Fi", imageUrl: "https://via.placeholder.com/150" },
    { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", description: "A story of teenage alienation.", rating: 4.4, category: "Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 8, title: "The Road", author: "Cormac McCarthy", description: "A father and son's survival journey in a post-apocalyptic world.", rating: 4.2, category: "Sci-Fi", imageUrl: "https://via.placeholder.com/150" },
    { id: 9, title: "Sapiens", author: "Yuval Noah Harari", description: "A brief history of humankind.", rating: 4.6, category: "Non-Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 10, title: "Educated", author: "Tara Westover", description: "A memoir of family, struggle, and triumph.", rating: 4.8, category: "Non-Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 11, title: "Dune", author: "Frank Herbert", description: "An epic sci-fi novel about power and desert planet Arrakis.", rating: 4.7, category: "Sci-Fi", imageUrl: "https://via.placeholder.com/150" },
    { id: 12, title: "Frankenstein", author: "Mary Shelley", description: "A horror classic about the creation of a monster.", rating: 4.6, category: "Horror", imageUrl: "https://via.placeholder.com/150" },
    { id: 13, title: "Becoming", author: "Michelle Obama", description: "A memoir by the former First Lady of the United States.", rating: 4.9, category: "Non-Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 14, title: "The Hobbit", author: "J.R.R. Tolkien", description: "A fantasy novel about a hobbit's adventure.", rating: 4.7, category: "Fantasy", imageUrl: "https://via.placeholder.com/150" },
    { id: 15, title: "The Shining", author: "Stephen King", description: "A horror story set in an isolated hotel.", rating: 4.5, category: "Horror", imageUrl: "https://via.placeholder.com/150" },
    { id: 16, title: "A Brief History of Time", author: "Stephen Hawking", description: "An exploration of cosmology.", rating: 4.4, category: "Non-Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 17, title: "Gone Girl", author: "Gillian Flynn", description: "A psychological thriller about a disappearing wife.", rating: 4.5, category: "Thriller", imageUrl: "https://via.placeholder.com/150" },
    { id: 18, title: "The Martian", author: "Andy Weir", description: "An astronaut's struggle for survival on Mars.", rating: 4.8, category: "Sci-Fi", imageUrl: "https://via.placeholder.com/150" },
    { id: 19, title: "Little Women", author: "Louisa May Alcott", description: "A classic novel about four sisters growing up.", rating: 4.6, category: "Fiction", imageUrl: "https://via.placeholder.com/150" },
    { id: 20, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", description: "A young wizard's journey begins.", rating: 4.9, category: "Fantasy", imageUrl: "https://via.placeholder.com/150" },
  ];
  
 
  
  dispatch(setBooks(books));
};

export default booksSlice.reducer;
