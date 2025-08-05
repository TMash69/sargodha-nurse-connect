import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "Faculty", href: "/faculty" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Blog", href: "/blog" }
  ];

  const programs = [
    { name: "General Nursing", href: "/courses#general-nursing" },
    { name: "BSN Program", href: "/courses#bsn" },
    { name: "Post-RN BSN", href: "/courses#post-rn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">CNS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">College of Nursing</h3>
                <p className="text-sm opacity-90">Sargodha</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Shaping the future of healthcare through excellent nursing education, 
              compassionate care, and innovative practices for over 25 years.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link 
                    to={program.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/20">
              <Link 
                to="/admissions"
                className="inline-flex items-center text-sm font-medium bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 opacity-75" />
                <div className="text-sm opacity-90">
                  <p>University Road</p>
                  <p>Sargodha, Punjab</p>
                  <p>Pakistan - 40100</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-75" />
                <div className="text-sm opacity-90">
                  <p>+92-48-9230451</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-75" />
                <div className="text-sm opacity-90">
                  <p>info@cns.edu.pk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75">
              © {currentYear} College of Nursing Sargodha. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;