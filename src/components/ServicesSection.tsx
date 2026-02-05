import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Backend Development',
    description: 'Scalable, secure server-side systems built with modern architectures.',
  },
  {
    number: '02',
    title: 'API Development',
    description: 'RESTful APIs with documentation, versioning, and seamless integrations.',
  },
  {
    number: '03',
    title: 'AI Automation',
    description: 'Intelligent workflows that transform and streamline operations.',
  },
  {
    number: '04',
    title: 'SaaS Development',
    description: 'End-to-end product development from concept to deployment.',
  },
  {
    number: '05',
    title: 'Web Development',
    description: 'Modern, performant web applications with clean interfaces.',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 overflow-visible">
      <div className="absolute top-0 left-0 w-full hr-amber" />
      
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-label">04 / Services</span>
          <h2 className="section-title">
            <span className="text-foreground">SERVICES</span>
            <br />
            <span className="text-primary">OFFERED</span>
          </h2>
        </motion.div>

        {/* Services List - Editorial style */}
        <div className="border-t-2 border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="group border-b-2 border-border"
            >
              <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-center cursor-pointer hover:bg-card/50 transition-colors px-4 -mx-4">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-primary">{service.number}</span>
                </div>
                
                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                
                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 border-2 border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight 
                      size={18} 
                      className="text-muted-foreground group-hover:text-primary-foreground transition-colors" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
