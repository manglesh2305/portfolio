import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className='fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4'>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className='w-full max-w-3xl bg-slate-900/95 border border-white/20 rounded-2xl p-6 backdrop-blur-xl'
      >
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-2xl font-bold'>{project.title}</h3>
          <button className='p-2 rounded-lg hover:bg-white/10' onClick={onClose} aria-label='Close modal'>
            <X size={20} />
          </button>
        </div>
        <img className='rounded-xl mb-4 object-cover w-full h-52' src={project.image} alt={project.title} loading='lazy' />
        <p className='mb-4 text-slate-200'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tech.map((t) => (
            <span key={t} className='text-sm px-3 py-1 bg-white/10 rounded-full'>{t}</span>
          ))}
        </div>
        <div className='flex gap-3'>
          <a href={project.demo} target='_blank' rel='noreferrer' className='px-4 py-2 bg-violet-500/80 rounded-lg hover:bg-violet-400 transition'>Live Demo</a>
          <a href={project.repo} target='_blank' rel='noreferrer' className='px-4 py-2 bg-cyan-500/80 rounded-lg hover:bg-cyan-400 transition'>Repo</a>
        </div>
      </motion.div>
    </div>
  );
}
