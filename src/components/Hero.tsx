
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GetQuoteForm from './GetQuoteForm';

const Hero = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-magizh-light via-white to-blue-50 flex items-center pt-16 overflow-hidden">
      {/* Enhanced pattern background with opacity adjustment */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '40px 40px',
        }}
      ></div>
      
      {/* Improved decorative elements with more pronounced effects */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-magizh-blue/10 filter blur-[80px] opacity-70"></div>
      <div className="absolute top-1/4 -left-12 w-48 h-48 rounded-full bg-magizh-purple/15 animate-float"></div>
      <div className="absolute bottom-32 left-1/3 w-24 h-24 rounded-full bg-magizh-teal/30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-magizh-pink/10 filter blur-[60px]"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-12">
          {/* Enhanced left column with more modern typography and improved content flow */}
          <div className="w-full md:w-1/2 space-y-7 text-left md:pr-8 mb-14 md:mb-0 animate-fade-in">
            {/* More visually appealing badge with improved styling */}
            <span className="inline-block py-2 px-5 rounded-full bg-magizh-blue/10 text-magizh-blue text-sm font-semibold border border-magizh-blue/20 shadow-sm">
              Next-Gen Web & Mobile Development
            </span>
            
            {/* Enhanced typography with shadow effect and stronger visual hierarchy */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-magizh-blue via-magizh-purple to-magizh-teal text-transparent bg-clip-text drop-shadow-sm">Transform Your Ideas</span> <br />
              Into Digital Reality
            </h1>
            
            {/* Improved description with slightly larger text and better line height */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              We craft custom web and mobile applications that elevate your business. 
              Serving all major industries with next-generation technology solutions.
            </p>
            
            {/* Enhanced feature list with more visually appealing icons and layout */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center text-gray-700 font-medium">
                <div className="bg-blue-50 p-1 rounded-full mr-2">
                  <Check size={16} className="text-magizh-blue" />
                </div>
                <span>Innovation-driven</span>
              </div>
              <div className="flex items-center text-gray-700 font-medium">
                <div className="bg-purple-50 p-1 rounded-full mr-2">
                  <Check size={16} className="text-magizh-purple" />
                </div>
                <span>Client-focused</span>
              </div>
              <div className="flex items-center text-gray-700 font-medium">
                <div className="bg-teal-50 p-1 rounded-full mr-2">
                  <Check size={16} className="text-magizh-teal" />
                </div>
                <span>Industry experts</span>
              </div>
            </div>
            
            {/* Enhanced CTA section with more visually appealing and dynamic buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-magizh-blue hover:bg-magizh-blue/80 text-white text-lg px-8 py-6 rounded-lg shadow-glow-blue transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
                onClick={() => setShowQuoteForm(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-magizh-blue text-magizh-blue hover:bg-magizh-blue/5 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:border-magizh-purple hover:text-magizh-purple group"
                asChild
              >
                <Link to="/services">
                  Our Services
                  <ArrowUpRight className="ml-1 h-4 w-4 transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* Enhanced trust indicators section with improved visual styling */}
            <div className="flex flex-col sm:flex-row sm:items-center pt-8 space-y-5 sm:space-y-0 sm:space-x-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by:</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center bg-white/80 px-4 py-1.5 rounded-lg shadow-sm">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">5.0 Rating</p>
                </div>
                <div className="flex items-center space-x-5 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                  {/* Client logos */}
                  <div className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity">
                    <img 
                      src="/lovable-uploads/cc5b20ed-c636-4f11-b85f-7cc7ad174791.png" 
                      alt="Company Logo 1" 
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity">
                    <img 
                      src="/lovable-uploads/7610d573-5744-48bb-90a6-fef817b2bce9.png" 
                      alt="Company Logo 2" 
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity">
                    <img 
                      src="/lovable-uploads/d9be9d26-2938-4f6b-896e-2aedc187d5a2.png" 
                      alt="Company Logo 3" 
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced right column with more visually appealing image card design */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md animate-rotate-in">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-magizh-blue/20 rounded-full filter blur-[50px] animate-float"></div>
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-400/20 rounded-full filter blur-[60px] animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Enhanced card design with more pronounced shadow and glass effect */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-hero-card border border-gray-100 z-10 transition-all duration-300 hover:shadow-glow-blue">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Mobile App Development" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Enhanced floating badges for more visual interest */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-2.5 shadow-lg border border-gray-100 animate-pulse-soft">
                  <div className="bg-gradient-to-r from-magizh-blue to-magizh-purple rounded-md p-2">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                {/* New floating element on top left */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg px-3 py-1.5 shadow-lg border border-gray-100">
                  <span className="text-sm font-semibold bg-gradient-to-r from-magizh-blue to-magizh-purple text-transparent bg-clip-text">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quote Form Dialog */}
      <GetQuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />
    </section>
  );
};

export default Hero;
