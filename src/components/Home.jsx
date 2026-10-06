function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-status">
          <span className="status-dot"></span> Available for projects & opportunities
        </p>

        <p className="greeting">Hi, I'm</p>

        <h1>Manglesh Yadav</h1>

        <h2>
          Senior Software Engineer · <span>DevOps / SRE</span>
        </h2>

        <p className="description">
          I develop high-quality web applications and deliver production-ready DevOps/SRE solutions across Kubernetes, CI/CD, and cloud platforms.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

        <div className="home-socials">
          <a
            href="https://github.com/manglesh2305"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/mangleshy23/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;