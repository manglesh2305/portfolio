import Reveal from "./Reveal";

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
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">PROJECTS</p>
            <h2>Things I've built and worked on.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-category">
                    {project.category}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
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

export default Projects;