
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import GetQuoteForm from './GetQuoteForm';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png" 
                alt="Magizh NexGen Technologies Logo" 
                className="h-12 md:h-14"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
            >
              Services
            </Link>
            <Link 
              to="/packages" 
              className={`transition-colors ${isActive('/packages') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
            >
              Packages
            </Link>
            <Link 
              to="/industries" 
              className={`transition-colors ${isActive('/industries') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
            >
              Industries
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
            >
              Contact
            </Link>
            <Button 
              className="bg-magizh-blue hover:bg-magizh-blue/80 text-white transition-colors"
              onClick={() => setShowQuoteForm(true)}
            >
              Get a Quote
            </Button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-magizh-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white w-full py-4 shadow-lg">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors py-2 ${isActive('/') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors py-2 ${isActive('/services') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/packages" 
                className={`transition-colors py-2 ${isActive('/packages') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
                onClick={() => setIsOpen(false)}
              >
                Packages
              </Link>
              <Link 
                to="/industries" 
                className={`transition-colors py-2 ${isActive('/industries') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors py-2 ${isActive('/about') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors py-2 ${isActive('/contact') ? 'text-magizh-blue font-medium' : 'text-gray-700 hover:text-magizh-blue'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button 
                className="bg-magizh-blue hover:bg-magizh-blue/80 text-white transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  setShowQuoteForm(true);
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Quote Form Dialog */}
      <GetQuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />
    </>
  );
};

export default Navbar;
