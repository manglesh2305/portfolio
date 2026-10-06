import Reveal from "./Reveal";

function Skills() {
  const skillGroups = [
    {
      title: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Helm",
      ],
    },
    {
      title: "CI/CD & GitOps",
      skills: [
        "Jenkins",
        "Spinnaker",
        "Argo CD",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Observability",
      skills: [
        "Prometheus",
        "Grafana",
        "Loki",
        "OpenTelemetry",
        "Tempo",
      ],
    },
    {
      title: "Languages & Tools",
      skills: [
        "C++",
        "JavaScript",
        "Linux",
        "Node.js",
        "Postman",
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
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skills-grid">
                  {group.skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;