
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-magizh-blue text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-magizh-teal uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements. Our team is ready 
            to help bring your vision to life with innovative technology solutions.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-magizh-blue hover:bg-magizh-purple text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-gray-200 mb-8">
                  Have questions or ready to discuss your project? 
                  Reach out to us through any of the following channels.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-magizh-teal shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-gray-200">info@magizhnexgen.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-magizh-teal shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-gray-200">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-magizh-teal shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="font-semibold">Visit Us</h4>
                      <p className="text-gray-200">
                        123 Tech Park,<br />
                        Silicon Avenue,<br />
                        Bangalore 560001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-teal transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
