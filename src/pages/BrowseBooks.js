import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    let books = allBooks;

    if (category) {
      books = books.filter((book) =>
        book.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchTerm.trim() !== '') {
      books = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(books);
  }, [allBooks, category, searchTerm]);

  return (
    <div className="browse-container">
      <h2>📚 Browse Books</h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.coverImage} alt={book.title} />
              <h4>{book.title}</h4>
              <p><em>{book.author}</em></p>
              <p>⭐ {book.rating}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
