import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home() {
  const books = useSelector((state) => state.books);
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Classic", "Fantasy"];

  return (
    <div className="home-container">
      <h1>📚 Welcome to the Online Library System</h1>

      <section className="category-section">
        <h2>📖 Book Categories</h2>
        <ul className="category-list">
          {categories.map((cat) => (
            <li key={cat}>
              <Link to={`/books/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="popular-section">
        <h2>🔥 Popular Books</h2>
        <div className="book-grid">
          {books.slice(0, 4).map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.coverImage} alt={book.title} />
              <h4>{book.title}</h4>
              <p><em>{book.author}</em></p>
              <p>⭐ {book.rating}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
