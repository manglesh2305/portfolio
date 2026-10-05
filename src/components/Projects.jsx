function Projects() {
  const projects = [
    {
      title: "Kubernetes Observability Platform",
      category: "Cloud & DevOps",
      description:
        "Built a cloud-native observability platform for monitoring Kubernetes workloads using metrics, logs, and distributed tracing.",
      technologies: [
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "OpenTelemetry",
      ],
      github: "#",
      demo: null,
    },
    {
      title: "CI/CD Automation Platform",
      category: "DevOps",
      description:
        "Designed and maintained CI/CD pipelines for microservices with automated builds, containerization, security scanning, and deployments.",
      technologies: [
        "Jenkins",
        "Spinnaker",
        "Docker",
        "AWS",
      ],
      github: "#",
      demo: null,
    },
    {
      title: "GitOps Deployment Platform",
      category: "Cloud Native",
      description:
        "Implemented GitOps-based application deployment using Kubernetes, Helm, and Argo CD across multiple environments.",
      technologies: [
        "AWS EKS",
        "Helm",
        "Argo CD",
        "Kubernetes",
      ],
      github: "#",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">PROJECTS</p>

          <h2>Things I've built and worked on.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-category">
                  {project.category}
                </span>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;