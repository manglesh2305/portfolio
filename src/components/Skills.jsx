function Skills() {
  const skills = [
    "AWS",
    "Kubernetes",
    "Docker",
    "Helm",
    "Argo CD",
    "Jenkins",
    "Terraform",
    "Prometheus",
    "Grafana",
    "OpenTelemetry",
    "Linux",
    "Git",
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-label">SKILLS</p>

        <h2>Tools and technologies I work with.</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;