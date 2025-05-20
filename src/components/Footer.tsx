
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).email;
    
    if (input.value) {
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      input.value = '';
    }
  };

  return (
    <footer className="bg-magizh-dark text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              Magizh <span className="text-magizh-teal">NexGen</span>
            </div>
            <p className="text-gray-400">
              Custom web and mobile application development for all major industries. 
              Transforming businesses with next-gen technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Our Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Industries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-magizh-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and offers by subscribing to our newsletter.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input 
                name="email"
                type="email" 
                placeholder="Your email" 
                className="bg-magizh-dark/60 border-gray-700 text-white"
                required
              />
              <Button 
                type="submit"
                className="bg-magizh-teal hover:bg-magizh-teal/80 text-magizh-dark"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Magizh NexGen Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
