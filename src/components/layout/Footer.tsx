
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ma-dark-gray text-foreground border-t border-muted">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/9aea5e9b-5eea-4a72-bd7e-03c5820766cc.png" 
                alt="MA Digital Hub Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-lg font-semibold gradient-text">MA DIGITAL HUB</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming ideas into digital excellence through innovative web solutions and creative designs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.fiverr.com/users/alimajid0302198" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ma-teal transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.25 16.25v-10h-10v10h10m0-11.667c.92 0 1.667.746 1.667 1.667v10c0 .92-.746 1.667-1.667 1.667h-10c-.92 0-1.667-.746-1.667-1.667v-10c0-.92.746-1.667 1.667-1.667h10M10.875 14.25c0 .345.28.625.625.625s.625-.28.625-.625v-2.917c0-.345-.28-.625-.625-.625h-1.25c-.345 0-.625.28-.625.625s.28.625.625.625h.625v2.292zM13.818 15c.304 0 .582-.173.716-.445l1.21-2.457c.149-.301.025-.663-.276-.811-.301-.15-.663-.025-.811.276L13.545 13.54l-1.113-1.964c-.156-.297-.524-.413-.82-.256-.296.156-.412.523-.256.82l1.77 3.109c.139.246.399.398.68.398c.004 0 .007 0 .011 0z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-ma-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-ma-teal transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-ma-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-ma-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-ma-teal mt-1 flex-shrink-0" />
                <a 
                  href="mailto:alimajid003021980@gmail.com"
                  className="text-muted-foreground hover:text-ma-teal transition-colors"
                >
                  alimajid003021980@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-ma-teal flex-shrink-0" />
                <span className="text-muted-foreground">Digital Space, Worldwide</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-ma-teal mt-1 flex-shrink-0" />
                <a 
                  href="https://www.fiverr.com/users/alimajid0302198"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-ma-teal transition-colors"
                >
                  Contact via Fiverr
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} MA Digital Hub. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Designed and Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
