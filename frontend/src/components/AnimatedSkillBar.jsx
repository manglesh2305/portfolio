import { motion } from 'framer-motion';

export default function AnimatedSkillBar({ skill, level }) {
  return (
    <div className='mb-3'>
      <div className='flex justify-between mb-1 font-medium text-sm text-slate-200'><span>{skill}</span><span>{level}%</span></div>
      <div className='h-2 rounded-full bg-white/10 overflow-hidden'>
        <motion.div
          className='h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-500'
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
