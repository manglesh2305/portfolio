import Reveal from "./Reveal";

function Projects() {
  const projectGroups = [
    {
      title: "DevOps & Cloud",
      description:
        "Cloud infrastructure, automation, Kubernetes, observability, and reliability projects.",
      projects: [
        {
          title: "Kubernetes Observability Platform",
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
      ],
    },

    {
      title: "Web Development",
      description:
        "Full-stack web applications, REST APIs, and modern web development projects.",
      projects: [
        {
          title: "Project Name",
          description:
            "Project description will be added here.",
          technologies: [
            "React",
            "Node.js",
            "MongoDB",
          ],
          github: "#",
        },
        {
          title: "Project Name",
          description:
            "Project description will be added here.",
          technologies: [
            "JavaScript",
            "Node.js",
            "REST API",
          ],
          github: "#",
        },
      ],
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

        <div className="project-groups">
          {projectGroups.map((group) => (
            <Reveal key={group.title}>
              <div className="project-group">
                <div className="project-group-heading">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>

                <div className="projects-grid">
                  {group.projects.map((project) => (
                    <article
                      className="project-card"
                      key={project.title}
                    >
                      <div className="project-top">
                        <h4>{project.title}</h4>

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

                      <p>{project.description}</p>

                      <div className="project-technologies">
                        {project.technologies.map((technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;