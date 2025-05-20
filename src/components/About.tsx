
import { CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import TechLogo from './TechLogo';
import { Badge } from './ui/badge';

const aboutPoints = [
  "Expert team of developers, designers, and strategists",
  "Proven track record of successful projects across industries",
  "Client-focused approach with transparent communication",
  "Cutting-edge technologies and best practices",
  "Commitment to quality, security, and scalable solutions"
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-magizh-blue/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-magizh-purple/10 rounded-lg"></div>
              
              <div className="relative bg-white p-2 rounded-xl shadow-lg z-10">
                <div className="grid grid-cols-2 gap-2">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                      alt="Team working on laptop" 
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Woman working on laptop" 
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg col-span-2">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="Team meeting" 
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <span className="text-sm font-semibold text-magizh-blue uppercase tracking-wider">About Us</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              We Build Technology That Powers Business Growth
            </h2>
            <p className="text-gray-600 mb-4">
              Magizh NexGen Technologies delivers high-quality digital solutions that drive 
              business growth and enhance user experiences across web and mobile platforms.
            </p>
            
            <div className="space-y-2 mb-6">
              {aboutPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-magizh-teal shrink-0 mt-0.5" />
                  <p className="ml-2 text-gray-600 text-sm">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="flex gap-6">
              <div>
                <div className="font-bold text-3xl text-magizh-blue">200+</div>
                <p className="text-gray-600 text-sm">Projects Delivered</p>
              </div>
              <div>
                <div className="font-bold text-3xl text-magizh-purple">50+</div>
                <p className="text-gray-600 text-sm">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
