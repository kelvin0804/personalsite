const Navbar = ({ scrolled }) => {
  return (
    <nav className={`nav-blur ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">WK</div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 