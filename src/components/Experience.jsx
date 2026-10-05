function Experience() {
  const experiences = [
    {
      company: "Pine Labs",
      role: "Senior Software Engineer",
      period: "Aug 2026 - Present",
      description:
        "Working on cloud infrastructure, Kubernetes platforms, CI/CD, observability, and production reliability.",
    },
    {
      company: "Pine Labs",
      role: "Software Engineer",
      period: "Oct 2024 - Jul 2026",
      description:
        "Worked on Kubernetes, AWS, CI/CD automation, monitoring, and production infrastructure.",
    },
    {
      company: "Pine Labs",
      role: "Software Engineer Intern",
      period: "Feb 2024 - Sep 2024",
      description:
        "Worked on monitoring, dashboards, alerts, and infrastructure automation.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>My journey so far.</h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <div className="experience-item" key={`${experience.role}-${experience.period}`}>
              <div className="experience-dot"></div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <span>{experience.period}</span>
                </div>

                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;