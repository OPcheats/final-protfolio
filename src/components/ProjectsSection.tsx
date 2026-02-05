import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'DIZITUP.AI',
    category: 'SAAS / AI',
    description: 'AI-powered SaaS platform for business automation and digital growth. Co-founded and leading backend development.',
    stack: ['Python', 'AWS', 'AI/ML', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    link: 'https://www.linkedin.com/company/dizitup/',
    featured: true,
  },
  {
    title: 'KAUSHIK FIT HUB',
    category: 'WEB',
    description: 'Modern gym website designed to engage fitness enthusiasts with seamless UX.',
    stack: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    link: '#',
    github: 'https://github.com/OPcheats',
  },
  {
    title: 'AI VOICE DETECTION',
    category: 'ML / PYTHON',
    description: 'AI-powered voice detection system that distinguishes between AI-generated and human voices using machine learning algorithms.',
    stack: ['Python', 'ML', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    github: 'https://github.com/OPcheats/ai-voice-detection',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="brutalist-card-hover overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-48 md:h-64 overflow-hidden border-b-2 border-border">
          <motion.img
            src={project.image}
            alt={`Screenshot of ${project.title} project - ${project.description.substring(0, 50)}...`}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground font-mono text-xs">
              TECH-LEAD
            </div>
          )}

          {/* Category */}
          <div className="absolute bottom-4 left-4 font-mono text-xs text-primary">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 font-mono text-xs border border-border text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-mono text-xs hover:bg-primary/90 transition-colors"
              >
                VISIT
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-border text-foreground font-mono text-xs hover:border-primary hover:text-primary transition-colors"
              >
                <Github size={14} />
                CODE
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 overflow-visible">
      <div className="absolute top-0 left-0 w-full hr-amber" />
      
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-label">05 / Projects</span>
          <h2 className="section-title">
            <span className="text-foreground">PROJECTS</span>
            <br />
            <span className="text-primary">SHOWCASE</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/OPcheats"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>MORE ON GITHUB</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
