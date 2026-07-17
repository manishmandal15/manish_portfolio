import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <div className="logo">
          Manish<span>.</span>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;