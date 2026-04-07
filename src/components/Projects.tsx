import { ExternalLink, Github, Star, Users, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import repareBladi from '@/assets/reparebladi-project.jpg';
import lesJardins from '@/assets/lejardindelasante-project.jpg';
import statelyHome from '@/assets/statelyhome.jpg';
import paralagrand from '@/assets/paralagrand.jpg';
import enjoyExperiences from '@/assets/enjoyexperiences.jpg';
import prodig from '@/assets/prodig.jpg';
import { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const projectsToShow = showMore ? 6 : 3;
  
  const projects = [
    {
      title: "Les Jardins de la Santé",
      subtitle: "Écologie & Wellness - Sanctuaire pour le corps et l'esprit",
      description: "Plateforme web pour un écolodge et wellness resort offrant une expérience immersive de détente et de bien-être. Site vitrine avec système de réservation, présentation des services, activités et offres exclusives.",
      image: lesJardins,
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive Design"],
      features: [
        "Système de réservation en ligne",
        "Présentation des services et activités",
        "Galerie d'images interactive",
        "Interface responsive et élégante",
        "Design immersif et authentique",
        "Intégration des réseaux sociaux"
      ],
      status: "Projet Professionnel",
      period: "En production",
      company: "Les Jardins de la Santé",
      githubUrl: "https://github.com/jaouad-sudo/lejardindelasanteFront",
      githubBackUrl: "https://github.com/jaouad-sudo/lejardindelasanteBack",
      liveUrl: "https://www.lesjardinsdelasante.com/",
      highlights: {
        users: "---",
        reports: "---",
        satisfaction: "---"
      }
    },
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
    },
    {
      title: "Stately Home",
      subtitle: "Plateforme immobilière de luxe",
      description: "Application web complète pour la vente et gestion de propriétés immobilières. Plateforme présentant les propriétés haut de gamme avec recherche avancée, galeries photos et gestion des demandes.",
      image: statelyHome,
      technologies: ["React", "Vite", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Catalogue de propriétés immobilières",
        "Recherche et filtrage avancés",
        "Galerie photos interactive",
        "Gestion des demandes de visite",
        "Dashboard propriétaire",
        "Interface responsive et élégante"
      ],
      status: "Projet Professionnel",
      period: "En production",
      company: "Stately Home",
      githubUrl: "https://github.com/jaouad-sudo/stateFront",
      githubBackUrl: "https://github.com/jaouad-sudo/lejardindelasanteBack",
      liveUrl: "https://statelyhome.ma/",
      highlights: {
        users: "---",
        reports: "---",
        satisfaction: "---"
      }
    },
    {
      title: "Paralagrand",
      subtitle: "Plateforme digitale",
      description: "Application web pour la gestion et présentation de services. Solution complète avec interface utilisateur intuitive et fonctionnalités avancées.",
      image: paralagrand,
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive Design"],
      features: [
        "Présentation des services",
        "Interface responsive",
        "Système de gestion intégré",
        "Design moderne et élégant",
        "Performance optimisée",
        "SEO friendly"
      ],
      status: "Projet Professionnel",
      period: "En production",
      company: "Paralagrand",
      githubUrl: "https://github.com/jaouad-sudo/Paralagrand",
      liveUrl: "https://para.prodig.ma/",
      highlights: {
        users: "---",
        reports: "---",
        satisfaction: "---"
      }
    },
    {
      title: "Enjoy Experiences",
      subtitle: "Plateforme de voyage et expériences",
      description: "Application web dédiée à la découverte et à la réservation d'expériences de voyage uniques et mémorables.",
      image: enjoyExperiences,
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive Design"],
      features: [
        "Catalogue d'expériences de voyage",
        "Système de réservation",
        "Galerie photos interactive",
        "Avis et évaluations",
        "Interface responsive",
        "Design immersif"
      ],
      status: "Projet Professionnel",
      period: "En production",
      company: "Enjoy Experiences",
      githubUrl: "#",
      liveUrl: "https://enjoyexperiences.ma/",
      highlights: {
        users: "---",
        reports: "---",
        satisfaction: "---"
      }
    },
    {
      title: "Prodig",
      subtitle: "Agence digitale",
      description: "Plateforme web pour une agence digitale présentant les services, portefeuille et expertise en transformation numérique.",
      image: prodig,
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive Design"],
      features: [
        "Présentation des services",
        "Portefeuille de projets",
        "Testimonials clients",
        "Blog et ressources",
        "Interface responsive",
        "SEO optimisé"
      ],
      status: "Projet Professionnel",
      period: "En production",
      company: "Prodig",
      githubUrl: "#",
      liveUrl: "https://prodig.ma/",
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
      technologies: ['Html', 'JS', 'CSS','PhP'],
      status: ""
    },
    {
      title: "Annuaire des entreprises locales",
      description: "un annuaire en ligne des entreprises locales.",
      technologies: ['Vite', 'React','Tailwind CSS','Radix UI','Shadcn/ui'],
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
          {projects.slice(0, projectsToShow).map((project, index) => (
            <Card key={index} className="project-card border-0 overflow-hidden slide-up">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Projet Principal
                    </span>
                  </div> */}
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        {project.githubUrl !== "#" && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Frontend GitHub">
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                              <Github size={20} />
                            </Button>
                          </a>
                        )}
                        {project.githubBackUrl && project.githubBackUrl !== "#" && (
                          <div className="flex items-center gap-1">
                            <a href={project.githubBackUrl} target="_blank" rel="noopener noreferrer" title="Backend GitHub">
                              <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Github size={20} />
                              </Button>
                            </a>
                           
                          </div>
                        )}
                        {project.liveUrl !== "#" && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                              <ExternalLink size={20} />
                            </Button>
                          </a>
                        )}
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
          
          {/* Show More / Show Less Button */}
          {projects.length > 3 && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={() => setShowMore(!showMore)}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-2 flex items-center gap-2"
              >
                {showMore ? (
                  <>
                    <span>Afficher moins</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>Afficher plus</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </Button>
            </div>
          )}
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