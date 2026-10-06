import Reveal from "./Reveal";

function Projects() {
  const projectGroups = [
    {
      title: "DevOps & Cloud",
      description:
        "Cloud infrastructure, automation, Kubernetes, observability, and reliability projects.",
      projects: [
        {
          title: "Grafana Migration: EC2 to EKS",
          type: "Professional Project",
          company: "Pine Labs",
          description:
            "Migrated Grafana from EC2-based infrastructure to AWS EKS using Grafana Operator, Helm, and Argo CD, transforming the deployment into a GitOps-managed workflow and reducing deployment time by 80%.",
          technologies: [
            "AWS EKS",
            "Grafana",
            "Helm",
            "Argo CD",
            "GitOps",
          ],
        },
        {
          title: "Kubernetes Backup & Disaster Recovery",
          type: "Professional Project",
          company: "Pine Labs",
          description:
            "Designed and implemented a Velero-based backup and disaster recovery solution for Kubernetes workloads on EKS, enabling automated backup of cluster resources and applications and supporting recovery from infrastructure and deployment failures.",
          technologies: [
            "Kubernetes",
            "AWS EKS",
            "Velero",
            "AWS",
            "Disaster Recovery"
          ],
        },
        {
          title: "End-to-End Distributed Tracing",
          type: "Professional Project",
          company: "Pine Labs",
          description:
            "Designed distributed tracing across CloudFront, AWS WAF, and Application Load Balancer using OpenTelemetry Collector and Grafana Tempo, enabling request-level visibility across the infrastructure and application stack.",
          technologies: [
            "OpenTelemetry",
            "Grafana Tempo",
            "AWS",
            "CloudFront",
            "AWS WAF",
            "ALB",
            "AWS Lambda"
          ],
        },
      ],
    }

    // {
    //   title: "Software Development",
    //   description:
    //     "Applications, backend services, and software engineering projects.",
    //   projects: [
    //     // Add your personal projects here
    //   ],
    // },
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

                {group.projects.length > 0 && (
                  <div className="projects-grid">
                    {group.projects.map((project) => (
                      <article className="project-card" key={project.title}>
                        <div className="project-meta">
                          <span>{project.type}</span>

                          {project.company && (
                            <span>{project.company}</span>
                          )}
                        </div>

                        <h4>{project.title}</h4>

                        <p>{project.description}</p>

                        <div className="project-technologies">
                          {project.technologies.map((technology) => (
                            <span key={technology}>{technology}</span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;