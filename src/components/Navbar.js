import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>📚 Library</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/books" className="nav-link">Browse Books</Link>
        <Link to="/add-book" className="nav-link">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
