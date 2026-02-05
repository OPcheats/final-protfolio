import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden noise-overlay">
      <header>
        {/* Navigation */}
        <Navigation />
        {/* Hero Section as part of header for SEO */}
        <HeroSection />
      </header>

      <main>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer>
        {/* Footer */}
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
