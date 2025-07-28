import { Link } from 'react-router-dom';
import './styles/NotFound.css';
import NotFoundImage from '../assets/404.png'; 

function NotFound() {
  return (
    <div className="not-found-container">
      <img
        src={NotFoundImage}
        alt="404 Not Found"
      />
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
