import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Github, href: 'https://github.com/OPcheats', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/piyush-paul-dev/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/p.i.y.u.s.h__ai?igsh=MWJ6YTF2MDhvMmw0eQ==', label: 'Instagram' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=piyushpaul108@gmail.com&su=Hello%20Piyush&body=Hi%20Piyush,%0A%0A', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isInIframe = () => {
    try {
      return window.self !== window.top;
    } catch {
      // Accessing window.top can throw in cross-origin iframe contexts.
      return true;
    }
  };

  const openExternal = async (url: string) => {
    // Use setTimeout to avoid popup blockers for all URLs
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 0);
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full hr-amber" />

      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="font-display text-2xl font-bold text-primary">
              PP<span className="text-foreground">_</span>
            </a>
            <p className="font-mono text-xs text-muted-foreground mt-2">
              © {currentYear} Piyush Paul
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social) => (
              // For all links, use the openExternal function which handles popup blockers properly
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                onClick={(e) => {
                  e.preventDefault();
                  void openExternal(social.href);
                }}
                className="p-3 border-2 border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-end"
          >
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              BACK TO TOP
              <div className="p-2 border-2 border-border group-hover:border-primary transition-colors">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
