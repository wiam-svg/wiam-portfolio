import { GraduationCap, Brain, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: "Formation",
      description: "DTS en Développement Digital & Formation IA"
    },
    {
      icon: <Brain className="text-primary" size={24} />,
      title: "Expertise",
      description: "Full-Stack & Intelligence Artificielle"
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Collaboration",
      description: "Travail en équipe & Leadership"
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Objectif",
      description: "Solutions innovantes & performantes"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Découvrez mon parcours, mes valeurs et ce qui me motive dans le développement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-6">Mon Profil</h3>
            <p className="text-light mb-6 leading-relaxed">
              Diplômée en <strong>Développement Digital</strong> à l'Institut Spécialisé de Technologie Appliquée HH1, 
              je poursuis actuellement une formation complémentaire en <strong>Intelligence Artificielle</strong> 
              en tant qu'Intégratrice IA.
            </p>
            <p className="text-light mb-6 leading-relaxed">
              <strong>Sérieuse, polyvalente et motivée</strong>, je suis dotée d'un excellent sens de l'adaptation 
              et d'une forte capacité de travail en équipe. Mon approche combine expertise technique 
              et intelligence émotionnelle pour créer des solutions qui répondent vraiment aux besoins utilisateurs.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Compétences comportementales :</h4>
              <div className="flex flex-wrap gap-2">
                {['Adaptabilité', 'Travail en équipe', 'Écoute active', 'Empathie', 'Organisation', 'Leadership'].map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up">
            {highlights.map((item, index) => (
              <Card key={index} className="project-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-light text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-xl font-semibold mb-6">Langues</h3>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Français</div>
              <div className="text-light text-sm">Bon niveau</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Anglais</div>
              <div className="text-light text-sm">Bases</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;