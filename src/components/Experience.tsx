import { Briefcase, Calendar, MapPin, GraduationCap, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire Développeuse",
      company: "Tsuki Digital INVEST",
      period: "Avril – Mai 2025",
      type: "PFE (Projet de Fin d'Études)",
      location: "Stage professionnel",
      description: "Développement de RepareBladi, une plateforme collaborative de signalement et suivi des problèmes urbains",
      achievements: [
        "Travail en mode MVP pour validation rapide du concept",
        "Conception de la base de données avec Power Designer",
        "Implémentation des fonctionnalités de signalement et votes",
        "Système de commentaires et alertes automatiques",
        "Interface utilisateur moderne et responsive"
      ],
      skills: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"]
    },
    {
      title: "Caissière & Responsable",
      company: "Pâtisserie & Café Tarab",
      period: "Été 2023",
      type: "Emploi saisonnier",
      location: "Service client",
      description: "Gestion complète des opérations commerciales et supervision d'équipe",
      achievements: [
        "Gestion efficace des stocks et inventaires",
        "Supervision et formation d'une équipe de 3 personnes",
        "Excellence dans le service client et satisfaction clientèle",
        "Optimisation des processus de vente",
        "Gestion des encaissements et rapports quotidiens"
      ],
      skills: ["Leadership", "Gestion d'équipe", "Service client", "Organisation"]
    },
    {
      title: "Membre actif CAD",
      company: "Comité d'Animation et Développement - OFPPT",
      period: "2023 – 2024",
      type: "Engagement associatif",
      location: "Bénévolat",
      description: "Participation active à l'organisation d'événements étudiants et recherche de partenariats",
      achievements: [
        "Organisation de 5+ événements étudiants majeurs",
        "Recherche et négociation avec des sponsors locaux",
        "Coordination logistique complexe pour événements de 200+ participants",
        "Développement de compétences en communication et networking",
        "Contribution à l'amélioration de la vie étudiante"
      ],
      skills: ["Organisation", "Communication", "Négociation", "Coordination"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Expériences Professionnelles</h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Mon parcours professionnel et les projets qui ont façonné mes compétences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-primary/20"></div>
              )}
              
              <Card className="project-card border-0 mb-8 ml-0 lg:ml-12">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    {/* Timeline Dot */}
                    <div className="absolute -left-8 lg:-left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-light text-sm">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-3">
                        <div className="flex items-center gap-2 font-medium">
                          <Briefcase size={16} className="text-primary" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-2 text-light text-sm">
                          <MapPin size={16} />
                          {exp.type}
                        </div>
                      </div>
                      
                      <p className="text-light mb-4">{exp.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Réalisations clés :</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-light">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Compétences développées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Formation Section */}
        <div className="mt-16 max-w-4xl mx-auto fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-center">Formation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="project-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-primary" size={24} />
                  <h4 className="font-semibold">DTS en Développement Digital</h4>
                </div>
                <p className="text-light mb-2">Institut Spécialisé de Technologie Appliquée HH1</p>
                <p className="text-light text-sm">Formation Full-Stack complète • 2025</p>
              </CardContent>
            </Card>
            
            <Card className="project-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="text-primary" size={24} />
                  <h4 className="font-semibold">Formation Intelligence Artificielle</h4>
                </div>
                <p className="text-light mb-2">Intégrateur IA</p>
                <p className="text-light text-sm">Spécialisation IA et Machine Learning • 2023-2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;