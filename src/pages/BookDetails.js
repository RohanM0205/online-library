import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <div className="book-details-container">
        <h2>Book not found</h2>
        <Link to="/books" className="back-button">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <div className="details-wrapper">
        <img src={book.coverImage} alt={book.title} className="details-image" />

        <div className="details-content">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Published:</strong> {book.publishedDate}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
          <p><strong>Rating:</strong> ⭐ {book.rating}</p>
          <p><strong>Description:</strong></p>
          <p>{book.description}</p>

          <a
            href="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="read-button"
          >
            📖 Read
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
