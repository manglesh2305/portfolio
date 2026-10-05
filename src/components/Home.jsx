function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-status">
          <span>●</span> Available for new opportunities
        </p>

        <p className="greeting">Hi, I'm</p>

        <h1>Manglesh Yadav</h1>

        <h2>
          Senior Software Engineer · <span>DevOps / SRE</span>
        </h2>

        <p className="description">
          I build and operate reliable cloud-native systems,
          Kubernetes platforms, CI/CD pipelines, and observability
          solutions.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;