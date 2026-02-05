import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import euphoriaLogo from '@/assets/euphoria-genx-logo.jpg';
import dizitupLogo from '@/assets/dizitup-logo.jpg';

const experiences = [
  {
    title: 'Backend Developer & Tech Lead',
    company: 'Dizitup.ai',
    period: '2025 — Present',
    isCurrent: true,
    logo: dizitupLogo,
    description: 'Leading backend architecture and development for an AI-powered SaaS platform focused on business automation and digital growth.',
    responsibilities: [
      'Architecting scalable backend systems using Python',
      'Building and maintaining RESTful APIs',
      'Implementing AI-powered automation features',
      'Setting up AWS infrastructure and CI/CD pipelines',
      'Collaborating on product development strategy',
    ],
    stack: ['Python', 'AWS', 'PostgreSQL', 'REST APIs', 'AI/ML'],
  },
  {
    title: 'AIML Intern',
    company: 'Euphoria GenX',
    period: 'Feb 2025 — Apr 2025',
    duration: '3 months',
    location: 'Kolkata, West Bengal, India · Hybrid',
    isCurrent: false,
    logo: euphoriaLogo,
    description: 'Completed intensive training in AI/ML integration and practical applications.',
    responsibilities: [
      'Basic AIML integration training',
      'Hands-on experience with machine learning workflows',
      'Collaborative projects in AI applications',
    ],
    stack: ['AI/ML', 'Python', 'Machine Learning'],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 overflow-visible">
      <div className="absolute top-0 left-0 w-full hr-amber" />
      
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 overflow-visible"
        >
          <span className="section-label">02 / Experience</span>
          <h2 className="section-title text-foreground break-words">
            PROFESSIONAL
            <br />
            <span className="text-primary">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Timeline content will go here */}

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-12"
          >
            {experiences.map((exp, index) => (
              <div key={index} className={`relative pl-8 border-l-2 ${exp.isCurrent ? 'border-primary' : 'border-border'} ${index > 0 ? 'mt-8' : ''}`}>
                {/* Timeline dot */}
                <div className={`absolute left-0 top-0 w-4 h-4 -translate-x-[9px] ${exp.isCurrent ? 'bg-primary animate-glow-pulse' : 'bg-muted-foreground'}`} />
                
                <div className="brutalist-card-hover p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {exp.logo && (
                        <img 
                          src={exp.logo} 
                          alt={`Logo of ${exp.company} - ${exp.title} at ${exp.company}`}
                          className="w-14 h-14 object-contain bg-white rounded p-1"
                        />
                      )}
                      <div>
                        {exp.isCurrent && (
                          <span className="inline-block px-3 py-1 mb-3 font-mono text-xs bg-primary text-primary-foreground">
                            CURRENT
                          </span>
                        )}
                        {!exp.isCurrent && exp.duration && (
                          <span className="inline-block px-3 py-1 mb-3 font-mono text-xs border border-muted-foreground text-muted-foreground">
                            {exp.duration}
                          </span>
                        )}
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                        {exp.location && (
                          <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                        )}
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 mt-2 bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 font-mono text-xs border-2 border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Future indicator */}
            <div className="relative pl-8 border-l-2 border-border mt-8">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] border-2 border-muted-foreground bg-background" />
              <p className="font-mono text-sm text-muted-foreground py-4">
                More experiences coming...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
