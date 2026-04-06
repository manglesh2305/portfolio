export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourhandle' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
  { name: 'Twitter', url: 'https://twitter.com/yourhandle' }
];

export const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'FastAPI', level: 80 },
  { name: 'Docker', level: 85 },
  { name: 'AWS', level: 78 }
];

export const projects = [
  {
    id: 'kube-portal',
    category: 'Cloud',
    title: 'Kubernetes Dashboard',
    description: 'Self-hosted cluster management UI with metrics and role-based access.',
    tech: ['React', 'Tailwind', 'FastAPI', 'AWS EKS'],
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
    repo: 'https://github.com/yourhandle/kube-portal',
    demo: '#'
  },
  {
    id: 'serverless-api',
    category: 'Backend',
    title: 'Serverless API Framework',
    description: 'Multi-tenant API with auth middleware, request validation, and observability.',
    tech: ['FastAPI', 'SQLite', 'JWT', 'OpenTelemetry'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    repo: 'https://github.com/yourhandle/serverless-api',
    demo: '#'
  },
  {
    id: 'devops-pipeline',
    category: 'DevOps',
    title: 'CI/CD Pipeline Studio',
    description: 'Pipeline visualizer + auto-deploy with GitHub Actions and Terraform.',
    tech: ['Docker', 'GitHub Actions', 'Terraform', 'Python'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    repo: 'https://github.com/yourhandle/devops-pipeline',
    demo: '#'
  }
];

export const experience = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Innovations Inc.',
    period: '2023 - Present',
    details: 'Designed and built a modular SaaS platform using React + FastAPI + Postgres.'
  },
  {
    role: 'Cloud Architect',
    company: 'Rapid Cloud Solutions',
    period: '2020 - 2023',
    details: 'Led cloud migrations and cost optimization for 25+ clients on AWS.'
  },
  {
    role: 'Software Engineer',
    company: 'Binary Labs',
    period: '2017 - 2020',
    details: 'Delivered APIs, microservices architecture and observability projects.'
  }
];

export const certifications = [
  { title: 'AWS Certified Solutions Architect', issued: '2024' },
  { title: 'Certified Kubernetes Administrator (CKA)', issued: '2023' },
  { title: 'Certified Scrum Master', issued: '2022' }
];
