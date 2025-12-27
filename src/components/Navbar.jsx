import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css'; // Ensure global styles are available if needed here, though global import in main.jsx is preferred.

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav>
            <div className="name">Manjusri Shanmugakumar</div>
            <button
                className={`nav-toggle ${isOpen ? 'active' : ''}`}
                id="navToggle"
                aria-label="Toggle navigation"
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About Me</Link></li>
                <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
                <li><Link to="/achievements" onClick={closeMenu}>Achievements</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
