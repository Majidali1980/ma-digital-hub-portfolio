
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 border-b border-muted backdrop-blur-md bg-ma-dark/80 fixed top-0 w-full z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/9aea5e9b-5eea-4a72-bd7e-03c5820766cc.png" 
            alt="MA Digital Hub Logo" 
            className="h-12 w-auto" 
          />
          <span className="text-xl font-semibold gradient-text">MA DIGITAL HUB</span>
        </Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-ma-teal transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-foreground hover:text-ma-teal transition-colors">
            Projects
          </Link>
          <Link to="/services" className="text-foreground hover:text-ma-teal transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-foreground hover:text-ma-teal transition-colors">
            Contact
          </Link>
          <Button asChild>
            <a 
              href="https://www.fiverr.com/users/alimajid0302198" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90"
            >
              Hire Me
            </a>
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-ma-dark border-b border-muted py-4 animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-ma-teal transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="text-foreground hover:text-ma-teal transition-colors py-2"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link 
                to="/services" 
                className="text-foreground hover:text-ma-teal transition-colors py-2"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-ma-teal transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <a 
                  href="https://www.fiverr.com/users/alimajid0302198" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90"
                >
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
