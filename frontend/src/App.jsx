import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, DownloadCloud, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks, skills, projects, experience, certifications } from './data';
import ScrollProgress from './components/ScrollProgress';
import AnimatedSkillBar from './components/AnimatedSkillBar';
import ProjectModal from './components/ProjectModal';
import ContactForm from './components/ContactForm';

const categories = ['All', 'DevOps', 'Backend', 'Cloud'];

function Section({ id, title, children }) {
  return (
    <section id={id} className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className='section-title text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-violet-400'>{title}</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function NavItem({ label, target, onClick }) {
  return (
    <a href={`#${target}`} onClick={onClick} className='hover:text-white/90 transition'>
      {label}
    </a>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark';
    setTheme(stored);
    document.documentElement.classList.toggle('light', stored === 'light');
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'All') return projects;
    return projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Blog', target: 'blog' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-slate-100 text-slate-900' : 'bg-zinc-950 text-slate-100'}`}>
      <ScrollProgress />

      <header className='fixed w-full z-40 top-0 backdrop-blur-xl bg-zinc-950/60 border-b border-white/10'>
        <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
          <a href='#home' className='text-xl font-bold tracking-wide'>Manglesh Yadav</a>
          <nav className='hidden md:flex gap-6 items-center text-slate-300'>
            {navItems.map((item) => <NavItem key={item.target} label={item.label} target={item.target} />)}
            <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-white/10'>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href='/resume.pdf' download className='flex items-center gap-1 px-3 py-2 bg-violet-500/90 rounded-lg text-sm'>
              <DownloadCloud size={16} /> Resume
            </a>
          </nav>
          <button className='md:hidden p-2 text-slate-300 hover:bg-white/10 rounded-lg' onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className='md:hidden bg-zinc-900/90 border-t border-white/10 pb-4'>
            <div className='container mx-auto px-4 grid gap-2'>
              {navItems.map((item) => (
                <a key={item.target} href={`#${item.target}`} onClick={() => setMenuOpen(false)} className='block p-2 rounded-lg hover:bg-white/10'>
                  {item.label}
                </a>
              ))}
              <button onClick={toggleTheme} className='block text-left p-2 rounded-lg hover:bg-white/10'>
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <a href='/resume.pdf' download className='block p-2 rounded-lg hover:bg-white/10'>Download Resume</a>
            </div>
          </div>
        )}
      </header>

      <main className='pt-24'>
        <section id='home' className='min-h-screen flex items-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-hero bg-no-repeat bg-cover opacity-30' />
          <div className='container mx-auto px-4 z-10'>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className='section-glass max-w-3xl mx-auto text-center'>
                <p className='text-violet-300 mb-3'>Hello, I am</p>
                <h1 className='text-5xl md:text-7xl font-bold'>Manglesh Yadav</h1>
                <p className='mt-3 text-xl text-slate-200'>Senior Full-Stack Engineer & Cloud Architect</p>
                <div className='mt-6 flex flex-wrap justify-center gap-4'>
                  <a href='#contact' className='px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl font-semibold'>Work with me</a>
                  <a href='#projects' className='px-8 py-3 border border-white/20 rounded-xl'>View projects</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id='about' title='About Me'>
          <div className='section-glass grid gap-6 md:grid-cols-2 items-center'>
            <img src='https://avatars.dicebear.com/api/avataaars/your-custom-name.svg' alt='avatar' className='w-full h-auto rounded-2xl border border-white/15' />
            <div>
              <p className='text-slate-300 mb-3'>I build accessible and scalable web experiences with modern design systems and reliable APIs. My work combines performance, performance, and productivity with UI polish and data-driven outcomes.</p>
              <ul className='grid gap-2 text-sm text-slate-200'>
                <li>• 7+ years of software engineering across startups and enterprise.</li>
                <li>• Strong domain expertise in cloud-native architecture and automation.</li>
                <li>• Passionate about UX, developer efficiency, monitoring and security.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id='skills' title='Skills'>
          <div className='section-glass grid gap-5 md:grid-cols-2'>
            {skills.map((skill) => <AnimatedSkillBar key={skill.name} skill={skill.name} level={skill.level} />)}
          </div>
        </Section>

        <Section id='projects' title='Projects'>
          <div className='section-glass mb-5 flex flex-wrap gap-2'>
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full ${projectFilter === cat ? 'bg-violet-500 text-white' : 'bg-white/10 text-slate-200 hover:bg-white/20'}`} onClick={() => setProjectFilter(cat)}>{cat}</button>
            ))}
          </div>
          <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {filteredProjects.map((project) => (
              <motion.article whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }} key={project.id} className='section-glass p-4 cursor-pointer' onClick={() => setActiveProject(project)}>
                <img src={project.image} alt={project.title} className='h-48 w-full object-cover rounded-xl mb-4' loading='lazy' />
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='text-slate-200 mt-1'>{project.description}</p>
                <div className='mt-3 flex gap-2 flex-wrap'>
                  {project.tech.map((t) => (<span className='text-xs px-2 py-1 rounded-full bg-white/10'>{t}</span>))}
                </div>
              </motion.article>
            ))}
          </div>
          <ProjectModal project={activeProject} isOpen={Boolean(activeProject)} onClose={() => setActiveProject(null)} />
        </Section>

        <Section id='experience' title='Experience'>
          <div className='section-glass'>
            <div className='relative border-l border-violet-400/50 pl-6 space-y-6'>
              {experience.map((item, idx) => (
                <div key={idx} className='relative'>
                  <span className='absolute -left-3 top-1 w-6 h-6 rounded-full bg-violet-500 border border-white/20'></span>
                  <p className='font-semibold text-white'>{item.role} at {item.company}</p>
                  <p className='text-xs text-slate-300'>{item.period}</p>
                  <p className='text-slate-200'>{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id='certifications' title='Certifications'>
          <div className='section-glass grid gap-3 md:grid-cols-3'>
            {certifications.map((cert, idx) => (
              <div key={idx} className='bg-white/5 border border-white/10 rounded-xl py-4 px-3'>
                <p className='font-semibold'>{cert.title}</p>
                <p className='text-xs text-slate-300'>Issued {cert.issued}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id='blog' title='Blog (Coming Soon)'>
          <div className='section-glass text-slate-300'>
            <p>Exciting content on architecture, scaling, and reliability is on the way. Stay tuned!</p>
          </div>
        </Section>

        <Section id='contact' title='Contact'>
          <div className='section-glass grid gap-8 lg:grid-cols-2'>
            <div>
              <p className='text-slate-200 mb-4'>Let’s build something remarkable together. Send a message and I will reply promptly.</p>
              <div className='space-y-2'>
                <p className='flex items-center gap-2'><Mail size={16} /> your.email@example.com</p>
                <div className='flex gap-2 mt-2'>
                  <a href={socialLinks[0].url} target='_blank' rel='noreferrer'><Github /></a>
                  <a href={socialLinks[1].url} target='_blank' rel='noreferrer'><Linkedin /></a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className='py-6 text-center text-sm text-slate-400'>
        © {new Date().getFullYear()} Manglesh Yadav. All rights reserved.
      </footer>
    </div>
  );
}
