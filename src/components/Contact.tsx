import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, WheatIcon, ChartBar, ChartBarBig, ZapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from "@emailjs/browser";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  
const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_lfsouxj",     // Remplace par ton service ID EmailJS
    "template_0ltcupc",    // Remplace par ton template ID
    formData,         // Les données du formulaire
    "S75ggYBGSq8dpbJ3D"      // Clé publique EmailJS
  )
  .then(() => {
    alert("Message envoyé !");
    setFormData({ name: "", email: "", subject: "", message: "" });
  })
  .catch((err) => {
    console.error(err);
    alert("Erreur lors de l'envoi du message.");
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "aitelkadiwiam@gamil.com",
      link: "mailto:aitelkadiwiam@gamil.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Téléphone",
      value: "+212 702 207 281",
      link: "tel:+212702207281"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Localisation",
      value: "Maroc",
      link: "#"
    },
    {
  icon: (
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111650.png"
      alt="WhatsApp"
      className="w-6 h-6 animate-bounce"
    />
  ),
  title: "WhatsApp",
  value: "+212 702 207 281",
  link: "https://wa.me/212702207281"
}


    



  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/wiam-svg",
      username: "@wiam-aitelkadi"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aitelkadi-wiam-573948329/",
      username: "Wiam Aitelkadi"
    },
    {
      icon: <Mail size={20} />,
      name: "Email",
      url: "mailto:aitelkadiwiam@email.com",
      username: "aitelkadiwiam@email.com"
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-8">Restons en contact</h3>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-light hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Bouton Télécharger mon CV */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Mon CV</h4>
                  <a
                    href="/mon_cv.pdf"
                    download
                    className="text-light hover:text-primary transition-colors"
                  >
                    Télécharger
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Retrouvez-moi sur :</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-light text-sm">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">Prête à collaborer !</h4>
                <p className="text-light text-sm mb-4">
                  Je suis disponible pour des missions de développement, des projets innovants
                  ou des collaborations en équipe.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge text-xs">Disponible</span>
                  <span className="skill-badge text-xs">Motivée</span>
                  <span className="skill-badge text-xs">Polyvalente</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <Card className="project-card border-0">
              <CardHeader>
                <CardTitle className="text-xl">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Sujet de votre message"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={5}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full hero-gradient hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    <Send size={18} className="mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
