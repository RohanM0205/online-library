import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import './styles/AddBook.css';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const [form, setForm] = useState({
    title: '',
    author: '',
    publishedDate: '',
    pages: '',
    coverImage: '',
    description: '',
    rating: '',
    category: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, publishedDate, pages, coverImage, description, rating, category } = form;

    if (!title || !author || !publishedDate || !pages || !coverImage || !description || !rating || !category) {
      setError('Please fill in all fields.');
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
      setError('Rating must be a number between 0 and 5.');
      return;
    }

    const newBook = {
      id: books.length + 1,
      ...form,
      pages: parseInt(pages),
      rating: parseFloat(rating),
    };

    dispatch(addBook(newBook));
    navigate('/books');
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} />
        <input type="date" name="publishedDate" value={form.publishedDate} onChange={handleChange} />
        <input type="number" name="pages" placeholder="Pages" value={form.pages} onChange={handleChange} />
        <input type="url" name="coverImage" placeholder="Cover Image URL" value={form.coverImage} onChange={handleChange} />
        <textarea name="description" placeholder="Description" rows="4" value={form.description} onChange={handleChange}></textarea>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Classic">Classic</option>
        </select>
        <input type="number" name="rating" step="0.1" min="0" max="5" placeholder="Rating (0-5)" value={form.rating} onChange={handleChange} />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
