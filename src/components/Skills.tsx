import { Code, Database, Palette, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-primary" size={28} />,
      title: "Langages",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python"]
    },
    {
      icon: <Server className="text-primary" size={28} />,
      title: "Frameworks",
      skills: ["Laravel", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      icon: <Database className="text-primary" size={28} />,
      title: "Bases de données",
      skills: ["MySQL", "MongoDB"]
    },
    {
      icon: <Palette className="text-primary" size={28} />,
      title: "Outils & Design",
      skills: ["Power Designer", "Git", "VS Code", "Figma",'Staruml','Jira','Power BI']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Compétences Techniques</h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et des technologies que je maîtrise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card border-0 text-center slide-up rotate-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-3 scale-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-badge w-full text-center bounce-in" style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}>
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Expertise Spécialisée</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover-lift glass-effect">
              <h4 className="font-semibold text-primary mb-2">Intelligence Artificielle</h4>
              <p className="text-light text-sm">Intégration IA, Solutions innovantes</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover-lift glass-effect">
              <h4 className="font-semibold text-primary mb-2">Développement Full-Stack</h4>
              <p className="text-light text-sm">Frontend moderne, Backend robuste, APIs RESTful</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover-lift glass-effect">
              <h4 className="font-semibold text-primary mb-2">Gestion de Projet</h4>
              <p className="text-light text-sm">Méthodologie MVP, Conception , Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;