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
                I'm a Software Engineer working across DevOps, SRE, cloud infrastructure, Kubernetes, CI/CD, observability, and modern web development.
              </p>

              <p>
                At Pine Labs, I work on production infrastructure and
                cloud-native platforms, helping teams deploy, monitor,
                and operate services reliably at scale.
              </p>

              <p>
                Alongside my full-time role, I take on freelance projects where I build web applications, automate workflows,
                improve reliability, and deliver practical DevOps solutions.
                I enjoy tackling production challenges, streamlining operations, and creating software that makes a real impact.
              </p>
            </div>

            <div className="about-highlight">
              <div>
                <strong>2+</strong>
                <span>Years of Experience</span>
              </div>

              <div>
                <strong>NIT Jalandhar</strong>
                <span>B.Tech · 2019-2023</span>
              </div>

              <div>
                <strong>DevOps & SRE</strong>
                <span>AWS · Kubernetes · DevOps · CI/CD · Observability</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;