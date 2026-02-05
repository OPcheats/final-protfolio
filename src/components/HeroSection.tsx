import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import profileImage from '@/assets/piyush-profile.jpg';

export function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-visible pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content - spans 7 columns */}
          <div className="lg:col-span-7 text-left">
            {/* Terminal-style intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-xs text-muted-foreground mb-8 flex items-center gap-2"
            >
              <Terminal size={14} className="text-primary" />
              <span className="text-primary">$</span>
              <span>cat about.txt</span>
              <span className="w-2 h-4 bg-primary animate-terminal-blink" />
            </motion.div>

            {/* Name - Big, bold, brutalist - Main H1 for SEO */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-tight mb-6"
            >
              <span className="text-foreground">PIYUSH</span>
              <br />
              <span className="text-primary amber-glow-subtle">PAUL</span>
            </motion.h1>

            {/* Role tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {['BACKEND DEV', 'TECH LEAD', 'AI + AUTOMATION'].map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 font-mono text-xs border-2 border-border text-muted-foreground"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed"
            >
              Building scalable systems and AI-powered products. 
              Currently leading backend at{' '}
              <span className="text-primary font-medium">Dizitup.ai</span>.
              BCA undergrad with a passion for crafting robust APIs.
            </motion.p>

            {/* CTA Buttons - Brutalist style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => handleNavClick('#projects')}
                className="btn-brutalist group flex items-center gap-2"
              >
                VIEW WORK
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-brutalist-outline"
              >
                GET IN TOUCH
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground">LINKS →</span>
              {[
                { icon: Github, href: 'https://github.com/OPcheats' },
                { icon: Linkedin, href: 'https://linkedin.com/in/piyush-paul-dev/' },
                { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=piyushpaul108@gmail.com&su=Hello%20Piyush&body=Hi%20Piyush,%0A%0A' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href="#"
                  onClick={(e) => {
                    if (href.includes('google.com')) {
                      e.preventDefault();
                      e.stopPropagation();
                      // Direct window open without popup blockers
                      window.open(href, '_blank', 'noopener,noreferrer');
                    } else if (href.startsWith('http')) {
                      // For other HTTP links, allow default behavior
                      return;
                    } else {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = href;
                    }
                  }}
                  className="p-2 border-2 border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile - spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main image container - brutalist frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]">
                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border-2 border-foreground bg-card overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Piyush Paul - Tech Lead & Backend Developer specializing in scalable systems, APIs, and AI-powered products"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 scanlines opacity-50" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-3 border-2 border-foreground"
              >
                <div className="font-mono text-xs">
                  <div className="opacity-70">CURRENT</div>
                  <div className="font-bold">TECH LEAD @ DIZITUP</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-mono text-xs text-muted-foreground">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
