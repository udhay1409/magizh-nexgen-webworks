
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import TechLogo from './TechLogo';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { useState } from 'react';

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
            
            <Collapsible>
              <div className="text-gray-600">
                <p className="mb-6 line-clamp-3">
                  Magizh NexGen Technologies is a leading provider of custom web and mobile 
                  application development services. With a passion for innovation and a focus 
                  on client success, we deliver high-quality digital solutions that drive 
                  business growth and enhance user experiences.
                </p>
              </div>
              
              <CollapsibleContent className="text-gray-600 mb-6">
                <p>
                  Magizh NexGen Technologies is a leading provider of custom web and mobile 
                  application development services. With a passion for innovation and a focus 
                  on client success, we deliver high-quality digital solutions that drive 
                  business growth and enhance user experiences.
                </p>
                <p className="mt-3">
                  Our team brings together years of experience across multiple industries and technologies.
                  We're committed to understanding your unique business challenges and delivering
                  tailored solutions that exceed expectations.
                </p>
              </CollapsibleContent>
              
              <div className="flex justify-end mb-6">
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs flex items-center gap-1 text-magizh-blue rounded-full hover:bg-magizh-light/50"
                  >
                    <span className="collapsible-closed">Read More</span>
                    <span className="collapsible-open">Show Less</span>
                    <ChevronDown className="h-3 w-3 collapsible-closed" />
                    <ChevronUp className="h-3 w-3 collapsible-open" />
                  </Button>
                </CollapsibleTrigger>
              </div>
            </Collapsible>
            
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
