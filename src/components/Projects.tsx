import { ExternalLink, Github, Star, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import repareBladi from '@/assets/reparebladi-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "RepareBladi",
      subtitle: "Plateforme collaborative urbaine",
      description: "Application web permettant aux citoyens de signaler et suivre les problèmes urbains de leur ville. Système de votes, commentaires et alertes automatiques pour améliorer la communication entre citoyens et autorités.",
      image: repareBladi,
      technologies: ["Laravel", "Inertia", "MySQL", "React", "Tailwind CSS", "Power Designer"],
      features: [
        "Signalement géolocalisé des problèmes urbains",
        "Système de votes communautaires",
        "Commentaires et discussions",
        "Alertes automatiques aux autorités",
        "Interface responsive et intuitive",
        "Dashboard administrateur"
      ],
      status: "Projet de Fin d'Études",
      period: "Avril - Mai 2025",
      company: "Tsuki Digital INVEST",
      githubUrl: "#",
      liveUrl: "#",
      highlights: {
        users: "---",
        reports: "---",
        satisfaction: "---"
      }
    }
  ];

  const upcomingProjects = [
    {
      title: "Réseau Social Lauréats OFPPT",
      description: "Plateforme de réseau social dédiée aux lauréats de l'OFPPT avec fonctionnalités de chat, publications et gestion de profils.",
      technologies: ['React', 'Laravel', 'TailwindCSS'],
      status: ""
    },
    {
      title: "Annuaire des entreprises locales",
      description: "un annuaire en ligne des entreprises locales.",
      technologies: ['Laravel', 'React','Tailwind CSS'],
      status: ""
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations et projets qui démontrent mes compétences techniques et créatives
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-0 overflow-hidden slide-up">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Projet Principal
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="hover:text-primary">
                          <Github size={20} />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:text-primary">
                          <ExternalLink size={20} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-light font-medium">{project.subtitle}</p>
                    <div className="flex items-center gap-4 text-sm text-light mt-2">
                      <span>{project.status}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                      <span>•</span>
                      <span>{project.company}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-light mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    {/* <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-primary/5 rounded-lg">
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary flex items-center justify-center gap-1">
                          <Users size={16} />
                          {project.highlights.users}
                        </div>
                        <div className="text-xs text-light">Utilisateurs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary flex items-center justify-center gap-1">
                          <MessageSquare size={16} />
                          {project.highlights.reports}
                        </div>
                        <div className="text-xs text-light">Signalements</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary flex items-center justify-center gap-1">
                          <Star size={16} />
                          {project.highlights.satisfaction}
                        </div>
                        <div className="text-xs text-light">Satisfaction</div>
                      </div>
                    </div> */}

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Fonctionnalités clés :</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-light text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-center"> Autres Projets </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="project-card border-0 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-light mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;