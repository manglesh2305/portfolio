import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      company: "Pine Labs",
      role: "Senior Software Engineer",
      period: "Aug 2026 - Present",
      description:
        "Working on cloud infrastructure, Kubernetes platforms, CI/CD, observability, and production reliability.",
      highlights: [
        "Operating cloud-native infrastructure and Kubernetes workloads in production.",
        "Improving reliability, deployment workflows, and observability across engineering platforms.",
        "Troubleshooting production incidents and driving long-term reliability improvements.",
      ],
    },
    {
      company: "Pine Labs",
      role: "Software Engineer",
      period: "Oct 2024 - Jul 2026",
      description:
        "Worked on Kubernetes, AWS, CI/CD automation, monitoring, and production infrastructure.",
      highlights: [
        "Built and maintained CI/CD workflows for microservices across multiple environments.",
        "Worked with AWS EKS, Helm, Argo CD, and containerized workloads.",
        "Built monitoring and alerting solutions using Prometheus and Grafana.",
      ],
    },
    {
      company: "Pine Labs",
      role: "Software Engineer Intern",
      period: "Feb 2024 - Sep 2024",
      description:
        "Worked on monitoring, dashboards, alerts, and infrastructure automation.",
      highlights: [
        "Created monitoring dashboards and production alerts.",
        "Worked with observability tools to improve system visibility.",
        "Supported infrastructure and deployment automation.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">EXPERIENCE</p>
            <h2>My journey so far.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="experience-list">
            {experiences.map((experience) => (
              <div
                className="experience-item"
                key={`${experience.role}-${experience.period}`}
              >
                <div className="experience-dot"></div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3>{experience.role}</h3>
                      <h4>{experience.company}</h4>
                    </div>

                    <span>{experience.period}</span>
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <ul className="experience-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;