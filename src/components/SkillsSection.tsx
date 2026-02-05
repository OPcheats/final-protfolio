import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    title: 'BACKEND',
    skills: ['Python', 'Node.js', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'FRONTEND',
    skills: ['React.js', 'TypeScript', 'Tailwind', 'Bootstrap'],
  },
  {
    title: 'CLOUD',
    skills: ['AWS', 'CloudFormation', 'Docker', 'CI/CD'],
  },
  {
    title: 'AI & TOOLS',
    skills: ['AI/ML', 'Git', 'Postman', 'Automation'],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-visible">
      <div className="absolute top-0 left-0 w-full hr-amber" />
      
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-label">03 / Skills</span>
          <h2 className="section-title break-words">
            <span className="text-foreground">TECHNICAL</span>
            <br />
            <span className="text-primary">ARSENAL</span>
          </h2>
        </motion.div>

        {/* Skills Grid - Brutalist layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-border">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + groupIndex * 0.1, duration: 0.5 }}
              className={`p-8 border-border ${
                groupIndex < skillGroups.length - 1 ? 'border-r-2' : ''
              } ${groupIndex < 2 ? 'border-b-2 lg:border-b-0' : ''} ${
                groupIndex === 2 ? 'lg:border-b-0 border-b-2 sm:border-b-0' : ''
              }`}
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs text-primary">
                  0{groupIndex + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {group.title}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + groupIndex * 0.1 + skillIndex * 0.05 }}
                    className="group flex items-center gap-3"
                  >
                    <span className="w-2 h-px bg-muted-foreground group-hover:w-4 group-hover:bg-primary transition-all duration-300" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
        />
      </div>
    </section>
  );
}

export default SkillsSection;
