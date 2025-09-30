// import { Briefcase, Calendar, MapPin, GraduationCap, Brain, Award, TrendingUp, Users, Code } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const Experience = () => {
//   const experiences = [
//     {
//       title: "Stagiaire Développeuse",
//       company: "Tsuki Digital INVEST",
//       period: "Avril – Mai 2025",
//       type: "PFE (Projet de Fin d'Études)",
//       location: "Stage professionnel",
//       description: "Développement de RepareBladi, une plateforme collaborative de signalement et suivi des problèmes urbains",
//       achievements: [
//         "Travail en mode MVP pour validation rapide du concept",
//         "Conception de la base de données avec Power Designer",
//         "Implémentation des fonctionnalités de signalement et votes",
//         "Système de commentaires et alertes automatiques",
//         "Interface utilisateur moderne et responsive"
//       ],
//       skills: ["React", "Laravel", "MySQL", "Tailwind css", "Inertia", "API"],
//       logo: "/TSUKI.png",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       title: "Caissière & Responsable",
//       company: "Pâtisserie & Café Tarab",
//       period: "Été 2023",
//       type: "Emploi saisonnier",
//       location: "Service client",
//       description: "Gestion complète des opérations commerciales et supervision d'équipe",
//       achievements: [
//         "Gestion efficace des stocks et inventaires",
//         "Supervision et formation d'une équipe de 8 personnes",
//         "Excellence dans le service client et satisfaction clientèle",
//         "Optimisation des processus de vente",
//         "Gestion des encaissements et rapports quotidiens"
//       ],
//       skills: ["Leadership", "Gestion d'équipe", "Service client", "Organisation"],
//       logo: "/TARAB.png",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       title: "Membre actif CAD",
//       company: "Comité d'Animation et Développement - OFPPT",
//       period: "2023 – 2024",
//       type: "Engagement associatif",
//       location: "Bénévolat",
//       description: "Participation active à l'organisation d'événements étudiants et recherche de partenariats",
//       achievements: [
//         "Organisation de 5+ événements étudiants majeurs",
//         "Recherche et négociation avec des sponsors locaux",
//         "Coordination logistique complexe pour événements de 200+ participants",
//         "Développement de compétences en communication et networking",
//         "Contribution à l'amélioration de la vie étudiante"
//       ],
//       skills: ["Organisation", "Communication", "Négociation", "Coordination"],
//       logo: "/cad.png",
//       color: "from-green-500 to-emerald-500"
//     }
//   ];

//   const formations = [
//     {
//       title: "Formation Intelligence Artificielle",
//       institution: "Intégrateur IA",
//       period: "2025",
//       description: "Spécialisation IA",
//       logo: "/ids.png",
//       gradient: "from-violet-500 to-purple-600"
//     },
//     {
//       title: "DTS en Développement Digital",
//       institution: "Institut Spécialisé de Technologie Appliquée HH1",
//       period: "2023-2025",
//       description: "Formation Full-Stack complète",
//       logo: "/ofppt.png",
//       gradient: "from-blue-500 to-indigo-600"
//     },
//     {
//       title: "Baccalauréat Scientifique Physiques",
//       institution: "Lycée Ibno Hazam",
//       period: "2020-2023",
//       description: "Sciences Physiques",
//       icon: GraduationCap,
//       gradient: "from-emerald-500 to-teal-600"
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none"></div>
//       <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 fade-in">
//           <div className="inline-block mb-4">
//             <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
//               <Briefcase className="text-purple-500" size={24} />
//               <span className="font-semibold text-purple-500">Mon Parcours</span>
//             </div>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//             Expériences Professionnelles
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Mon parcours professionnel et les projets qui ont façonné mes compétences
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="max-w-5xl mx-auto mb-20">
//           {experiences.map((exp, index) => {

//             return (
//               <div
//                 key={index}
//                 className="relative mb-12 last:mb-0 group"
//                 style={{ animationDelay: `${index * 0.15}s` }}
//               >
//                 {/* Timeline Line */}
//                 <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2" />


//                 <div className="flex gap-6 lg:gap-8">
//                   {/* Timeline Icon */}
//                   <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${exp.color} p-[2px] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
//                     <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">

//                       <img
//                         src={exp.logo}
//                         alt={exp.company}
//                         className="w-10 h-10 object-contain"
//                       />

//                     </div>
//                   </div>


//                   {/* Content Card */}
//                   <Card className="flex-1 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
//                     {/* Gradient Border Effect */}
//                     <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

//                     <CardHeader className="pb-4 relative">
//                       <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
//                         <div className="flex-1">
//                           <CardTitle className="text-2xl mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
//                             {exp.title}
//                           </CardTitle>
//                           <div className="flex items-center gap-2 text-muted-foreground font-medium">
//                             <Briefcase size={18} className="text-purple-500" />
//                             <span>{exp.company}</span>
//                           </div>
//                         </div>

//                         <div className="flex flex-col gap-2">
//                           <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
//                             <Calendar size={16} />
//                             <span className="font-medium">{exp.period}</span>
//                           </div>
//                           <div className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 rounded-full border border-purple-500/20">
//                             <Award size={16} />
//                             {exp.type}
//                           </div>
//                         </div>
//                       </div>

//                       <p className="text-muted-foreground leading-relaxed">
//                         {exp.description}
//                       </p>
//                     </CardHeader>

//                     <CardContent className="space-y-6">
//                       {/* Achievements */}
//                       <div className="space-y-3">
//                         <h4 className="font-semibold text-sm uppercase tracking-wide text-purple-600 dark:text-purple-400 flex items-center gap-2">
//                           <TrendingUp size={16} />
//                           Réalisations clés
//                         </h4>
//                         <ul className="space-y-2.5">
//                           {exp.achievements.map((achievement, achIndex) => (
//                             <li
//                               key={achIndex}
//                               className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
//                             >
//                               <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`}></div>
//                               <span className="leading-relaxed">{achievement}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Skills */}
//                       <div className="space-y-3">
//                         <h4 className="font-semibold text-sm uppercase tracking-wide text-purple-600 dark:text-purple-400 flex items-center gap-2">
//                           <Code size={16} />
//                           Compétences développées
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {exp.skills.map((skill, skillIndex) => (
//                             <span
//                               key={skillIndex}
//                               className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} bg-opacity-10 border border-current/20 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default`}
//                               style={{ animationDelay: `${skillIndex * 0.05}s` }}
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Formation Section */}
//         <div className="max-w-6xl mx-auto fade-in">
//           <div className="text-center mb-12">
//             <div className="inline-block mb-4">
//               <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full border border-blue-500/20">
//                 <GraduationCap className="text-blue-500" size={24} />
//                 <span className="font-semibold text-blue-500">Parcours Académique</span>
//               </div>
//             </div>
//             <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Formation
//             </h3>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {formations.map((formation, index) => (
//               <Card
//                 key={index}
//                 className="group border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* Gradient Overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${formation.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

//                 <CardContent className="p-6 relative">
//                   {/* Icon/Logo */}
//                   <div className="mb-4 flex items-center justify-center">
//                     {formation.logo ? (
//                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                         <img
//                           src={formation.logo}
//                           alt={formation.institution}
//                           className="w-full h-full object-contain"
//                         />
//                       </div>
//                     ) : formation.icon && (
//                       <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${formation.gradient} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
//                         <formation.icon className="w-full h-full text-white" />
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="text-center space-y-3">
//                     <h4 className="font-bold text-lg leading-tight">
//                       {formation.title}
//                     </h4>
//                     <p className="text-muted-foreground text-sm font-medium">
//                       {formation.institution}
//                     </p>
//                     <div className="flex items-center justify-center gap-2 text-sm">
//                       <Calendar size={14} className="text-purple-500" />
//                       <span className="text-muted-foreground">{formation.period}</span>
//                     </div>
//                     <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${formation.gradient} bg-opacity-10 text-transparent bg-clip-text border border-current/10`}>
//                       {formation.description}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import { Briefcase, Calendar, MapPin, GraduationCap, Brain, Award, TrendingUp, Users, Code } from 'lucide-react';
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
      skills: ["React", "Laravel", "MySQL", "Tailwind css", "Inertia", "API"],
      logo: "/TSUKI.png",
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
        "Supervision et formation d'une équipe de 8 personnes",
        "Excellence dans le service client et satisfaction clientèle",
        "Optimisation des processus de vente",
        "Gestion des encaissements et rapports quotidiens"
      ],
      skills: ["Leadership", "Gestion d'équipe", "Service client", "Organisation"],
      logo: "/TARAB.png",
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
      skills: ["Organisation", "Communication", "Négociation", "Coordination"],
      logo: "/cad.png",
    }
  ];

  const formations = [
    {
      title: "Formation Intelligence Artificielle",
      institution: "Intégrateur IA",
      period: "2025",
      description: "Spécialisation IA",
      logo: "/ids.png",
    },
    {
      title: "DTS en Développement Digital",
      institution: "Institut Spécialisé de Technologie Appliquée HH1",
      period: "2023-2025",
      description: "Formation Full-Stack complète",
      logo: "/ofppt.png",
    },
    {
      title: "Baccalauréat Scientifique Physiques",
      institution: "Lycée Ibno Hazam",
      period: "2020-2023",
      description: "Sciences Physiques",
      icon: GraduationCap,
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-3 bg-purple-400/10 rounded-full border border-purple-400/30">
              <Briefcase className="text-purple-400" size={24} />
              <span className="font-semibold text-purple-400">Mon Parcours</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mon parcours professionnel et les projets qui ont façonné mes compétences
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          {experiences.map((exp, index) => {

            return (
              <div
                key={index}
                className="relative mb-12 last:mb-0 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-purple-300 transform -translate-x-1/2" />


                <div className="flex gap-6 lg:gap-8">
                  {/* Timeline Icon */}
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-300 p-[2px] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">

                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain"
                      />

                    </div>
                  </div>


                  {/* Content Card */}
                  <Card className="flex-1 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                    <CardHeader className="pb-4 relative">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground font-medium">
                            <Briefcase size={18} className="text-purple-400" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                            <Calendar size={16} />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/30">
                            <Award size={16} />
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-purple-400 flex items-center gap-2">
                          <TrendingUp size={16} />
                          Réalisations clés
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-300 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-purple-400 flex items-center gap-2">
                          <Code size={16} />
                          Compétences développées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-4 py-2 rounded-full text-sm font-medium bg-purple-400/10 text-purple-400 border border-purple-400/30 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
                              style={{ animationDelay: `${skillIndex * 0.05}s` }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Formation Section */}
        <div className="max-w-6xl mx-auto fade-in">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-purple-400/10 rounded-full border border-purple-400/30">
                <GraduationCap className="text-purple-400" size={24} />
                <span className="font-semibold text-purple-400">Parcours Académique</span>
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
              Formation
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formations.map((formation, index) => (
              <Card
                key={index}
                className="group border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-300 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                <CardContent className="p-6 relative">
                  {/* Icon/Logo */}
                  <div className="mb-4 flex items-center justify-center">
                    {formation.logo ? (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <img
                          src={formation.logo}
                          alt={formation.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : formation.icon && (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-300 p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <formation.icon className="w-full h-full text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h4 className="font-bold text-lg leading-tight">
                      {formation.title}
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium">
                      {formation.institution}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Calendar size={14} className="text-purple-400" />
                      <span className="text-muted-foreground">{formation.period}</span>
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-purple-400/10 text-purple-400 border border-purple-400/30">
                      {formation.description}
                    </div>
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

export default Experience;