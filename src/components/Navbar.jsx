import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        Manglesh Yadav
      </a>

      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#experience"
          className={activeSection === "experience" ? "active" : ""}
          onClick={closeMenu}
        >
          Experience
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;