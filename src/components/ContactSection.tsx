import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Github, Linkedin, MapPin, Loader2, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const contactLinks = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'piyushpaul108@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=piyushpaul108@gmail.com&su=Hello%20Piyush&body=Hi%20Piyush,%0A%0A',
  },
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    value: '/piyush-paul-dev',
    href: 'https://linkedin.com/in/piyush-paul-dev/',
  },
  {
    icon: Github,
    label: 'GITHUB',
    value: '/OPcheats',
    href: 'https://github.com/OPcheats',
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: 'Kolkata, India',
    href: null,
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_lg8ykvh',
        'template_aw1e07u',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Piyush',
        },
        '9V0_gFLzRhKYh4wkG'
      );
      
      toast.success('Message sent!', {
        description: "I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full hr-amber" />
      
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="section-label">06 / Contact</span>
            <h2 className="section-title mb-8">
              <span className="text-foreground">GET IN</span>
              <br />
              <span className="text-primary">TOUCH</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-12">
              Have a project in mind or want to collaborate? I'm always open to discussing 
              new opportunities and ideas.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {item.href ? (
                    item.href.startsWith('mailto:') ? (
                      // For mailto links, use simpler anchor without extra attributes
                      <a
                        href="#"
                        onClick={(e) => {
                          if (item.href.includes('google.com')) {
                            e.preventDefault();
                            e.stopPropagation();
                            // Direct window open without popup blockers
                            window.open(item.href, '_blank', 'noopener,noreferrer');
                          } else {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = item.href;
                          }
                        }}
                        className="group flex items-center gap-4 py-4 border-b border-border hover:border-primary transition-colors"
                      >
                        <item.icon size={18} className="text-primary" />
                        <div className="flex-1">
                          <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ) : (
                      // For HTTP links, use target and rel
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 py-4 border-b border-border hover:border-primary transition-colors"
                      >
                        <item.icon size={18} className="text-primary" />
                        <div className="flex-1">
                          <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )
                  ) : (
                    <div className="flex items-center gap-4 py-4 border-b border-border">
                      <item.icon size={18} className="text-primary" />
                      <div>
                        <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="brutalist-card p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-8">
                SEND A MESSAGE
              </h3>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-brutalist flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
