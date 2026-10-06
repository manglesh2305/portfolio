import Reveal from "./Reveal";

function Skills() {
  const skillGroups = [
    {
      title: "Cloud & Infrastructure",
      icon: "☁",
      skills: [
        "AWS",
        "Kubernetes",
        "Docker",
        "Helm",
        "EKS",
        "ECR",
        "IaC (CloudFormation)",
        "S3",
        "AWS Lambda",
      ],
    },
    {
      title: "CI/CD & GitOps",
      icon: "⚙",
      skills: [
        "Jenkins",
        "Spinnaker",
        "Argo CD",
        "Git",
        "GitHub",
        "Bitbucket"
      ],
    },
    {
      title: "Observability",
      icon: "◉",
      skills: [
        "Prometheus",
        "Grafana",
        "Loki",
        "OpenTelemetry",
        "Tempo",
        "Telegraf",
        "InfluxDB",
        "Victoria Metrics",
        "Clickhouse"
      ],
    },
    {
      title: "Languages & Tools",
      icon: "</>",
      skills: [
        "C++",
        "JavaScript",
        "Linux",
        "Node.js",
        "Postman",
        "Shell Script",
        "Python",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">SKILLS</p>
            <h2>Tools and technologies I work with.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-header">
                  <h3>{group.title}</h3>
                  <span className="skill-group-icon">{group.icon}</span>
                </div>

                <div className="skill-items">
                  {group.skills.map((skill) => (
                    <span className="skill-item" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;