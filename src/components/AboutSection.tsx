import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-visible">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full hr-amber" />
      <div className="absolute top-20 right-0 w-1/3 h-px bg-border" />
      
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Label and title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="section-label">01 / About</span>
            <h2 className="section-title text-foreground">
              ABOUT
              <br />
              <span className="text-primary">PIYUSH PAUL</span>
            </h2>
            
            {/* Stats */}
            <div className="mt-12 space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-4xl font-display font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 lg:pt-16"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a backend engineer obsessed with building systems that{' '}
                <span className="text-foreground font-medium">actually work at scale</span>. 
                Currently pursuing my BCA at Techno India Kolkata while leading backend 
                development at Dizitup.ai — an AI-powered SaaS platform I co-founded.
              </p>
              <p>
                My journey started with curiosity about how software works under the hood. 
                Today, I specialize in{' '}
                <span className="text-primary">Python</span>,{' '}
                <span className="text-primary">AWS</span>, and building{' '}
                <span className="text-primary">RESTful APIs</span>{' '}
                that power modern applications.
              </p>
              <p>
                When I'm not writing code, I'm exploring AI/ML, automating workflows, 
                and figuring out how to make complex systems simpler.
              </p>
            </div>

            {/* Code block decoration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-12 brutalist-card p-6 font-mono text-sm"
            >
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-amber-dim" />
                <span className="w-3 h-3 rounded-full bg-green-600/70" />
              </div>
              <pre className="text-muted-foreground overflow-x-auto">
<code className="text-xs sm:text-sm">{`const piyush = {
  education: "BCA @ Techno India (2023-2027)",
  role: "Tech Lead",
  focus: ["Scalable APIs", "AI Automation", "SaaS"],
  status: "Building cool stuff"
};`}</code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
