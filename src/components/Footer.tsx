
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).email;
    if (input.value) {
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter."
      });
      input.value = '';
    }
  };

  return (
    <footer className="bg-gradient-to-br from-magizh-dark to-magizh-dark/95 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              Magizh <span className="text-magizh-blue">NexGen</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Custom web and mobile application development for all major industries. 
              Transforming businesses with next-gen technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mntfuture" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/mntfuture" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/mntfuture/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mnt_future" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-infrastructure" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/enterprise-solutions" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Our Work
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 flex items-center gap-2 hover:text-magizh-blue transition-colors">
                  <span className="text-xs">→</span> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Subscribe</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Stay updated with our latest news and offers by subscribing to our newsletter.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <Input name="email" type="email" placeholder="Your email address" className="bg-white/10 border-white/10 text-white placeholder:text-gray-400" required />
              <Button type="submit" className="text-white w-full bg-magizh-blue hover:bg-magizh-blue/80">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-sm">
            © {new Date().getFullYear()} Magizh NexGen Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-magizh-blue transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-magizh-blue transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-magizh-blue transition-colors">Cookies</Link>
            <a href="mailto:info@mntfuture.com" className="text-gray-400 hover:text-magizh-blue transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
