import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h3 className="font-bold text-xl text-primary mb-2">Wiam Aitelkadi</h3>
            <p className="text-light">Développeuse Full-Stack & Intégratrice IA</p>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-light text-sm text-center flex items-center gap-1">
              Conçu avec <Heart size={16} className="text-red-500" /> et beaucoup de café ☕
            </p>
            <p className="text-light text-xs">
              © 2025 Wiam Aitelkadi. Tous droits réservés.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="nav-link">À propos</a>
            <a href="#skills" className="nav-link">Compétences</a>
            <a href="#experience" className="nav-link">Expériences</a>
            <a href="#projects" className="nav-link">Projets</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;