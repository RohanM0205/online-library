import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>📚 Online Library System — Learn. Explore. Grow.</p>
        <p>© {new Date().getFullYear()} Rohan More. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
