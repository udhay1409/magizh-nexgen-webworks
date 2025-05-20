
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-magizh-blue">
            Magizh <span className="text-magizh-purple">NexGen</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-magizh-blue transition-colors">Services</a>
          <a href="#industries" className="text-gray-700 hover:text-magizh-blue transition-colors">Industries</a>
          <a href="#about" className="text-gray-700 hover:text-magizh-blue transition-colors">About</a>
          <a href="#contact" className="text-gray-700 hover:text-magizh-blue transition-colors">Contact</a>
          <Button className="bg-magizh-blue hover:bg-magizh-purple text-white transition-colors">
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
            <a 
              href="#services" 
              className="text-gray-700 hover:text-magizh-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#industries" 
              className="text-gray-700 hover:text-magizh-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-magizh-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-magizh-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-magizh-blue hover:bg-magizh-purple text-white transition-colors">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
