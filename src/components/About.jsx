import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">ABOUT ME</p>

            <h2>
              Building reliable systems and solving real-world problems.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Software Engineer focused on DevOps, SRE, cloud
                infrastructure, Kubernetes, CI/CD, and observability.
              </p>

              <p>
                At Pine Labs, I work on production infrastructure and
                cloud-native platforms, helping teams deploy, monitor,
                and operate services reliably at scale.
              </p>

              <p>
                I enjoy solving production problems, automating repetitive
                work, improving system reliability, and learning from the
                challenges that come with operating real-world systems.
              </p>
            </div>

            <div className="about-highlight">
              <div>
                <strong>2+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>NIT</strong>
                <span>B.Tech · Jalandhar</span>
              </div>

              <div>
                <strong>SRE</strong>
                <span>Cloud · Kubernetes · DevOps</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;