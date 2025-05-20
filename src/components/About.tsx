
import { CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const aboutPoints = [
  "Expert team of developers, designers, and strategists",
  "Proven track record of successful projects across industries",
  "Client-focused approach with transparent communication",
  "Cutting-edge technologies and best practices",
  "Commitment to quality, security, and scalable solutions",
  "Ongoing support and maintenance services"
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-magizh-blue/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-magizh-purple/10 rounded-lg"></div>
              
              <div className="relative bg-white p-3 rounded-xl shadow-xl z-10">
                <div className="grid grid-cols-2 gap-3">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                      alt="Team working on laptop" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Woman working on laptop" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg col-span-2">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="Team meeting" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-semibold text-magizh-blue uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              We Build Technology That Powers Business Growth
            </h2>
            <p className="text-gray-600 mb-6">
              Magizh NexGen Technologies is a leading provider of custom web and mobile 
              application development services. With a passion for innovation and a focus 
              on client success, we deliver high-quality digital solutions that drive 
              business growth and enhance user experiences.
            </p>
            
            <div className="space-y-3 mb-8">
              {aboutPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-magizh-teal shrink-0 mt-0.5" />
                  <p className="ml-3 text-gray-600">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <div className="font-bold text-4xl text-magizh-blue">200+</div>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="font-bold text-4xl text-magizh-purple">50+</div>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
