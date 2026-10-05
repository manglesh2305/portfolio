function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building reliable systems and solving real-world problems.
          </h2>
        </div>

        <div className="about-content">
          <div>
            <p>
              I'm a Software Engineer focused on DevOps, SRE, cloud
              infrastructure, Kubernetes, CI/CD, and observability.
            </p>

            <p>
              I enjoy working on production systems, improving reliability,
              automating repetitive tasks, and solving challenging
              infrastructure problems.
            </p>
          </div>

          <div className="about-highlight">
            <div>
              <strong>2+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Dashboards Built</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Production Alerts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;