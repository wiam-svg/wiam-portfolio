import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bounce-in">
              Bonjour, je suis{' '}
              <span className="gradient-text">Wiam Aitelkadi</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-light font-medium mb-6">
              Développeuse Full-Stack & Intégratrice IA
            </h2>
            <p className="text-lg text-light max-w-2xl mb-8">
              Diplômée en Développement Digital et passionnée par l'Intelligence Artificielle,
              je crée des solutions numériques innovantes et performantes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="hero-gradient hover:opacity-90 transition-all duration-500 hover:scale-105 pulse-glow"
                asChild
              >
                <a href="#projects">Voir mes projets</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift"
                asChild
              >
                <a href="#contact">Me contacter</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/wiam-svg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover-lift scale-bounce"
                >
                  <Github size={20} />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/aitelkadi-wiam-573948329/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover-lift scale-bounce"
                >
                  <Linkedin size={20} />
                </Button>
              </a>

              <a href="mailto:aitelkadiwiam@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover-lift scale-bounce"
                >
                  <Mail size={20} />
                </Button>
              </a>

            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end slide-up">
            <div className="relative float">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl hover-lift">
                <img
                  src={profilePhoto}
                  alt="Wiam Aitelkadi - Développeuse Full-Stack"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements with Purple Theme */}
              <div className="absolute -top-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-30 pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-primary/20 rounded-full float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-light hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;