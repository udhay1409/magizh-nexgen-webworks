
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-magizh-light via-white to-blue-50 flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-magizh-blue/10 filter blur-3xl"></div>
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-magizh-purple/10 animate-float"></div>
      <div className="absolute bottom-32 left-1/3 w-16 h-16 rounded-full bg-magizh-teal/20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 right-1/4 w-40 h-40 rounded-full bg-magizh-pink/10 filter blur-xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 text-left md:pr-12 mb-12 md:mb-0 animate-fade-in">
            <span className="inline-block py-1.5 px-4 rounded-full bg-magizh-blue/10 text-magizh-blue text-sm font-medium border border-magizh-blue/20">
              Next-Gen Web & Mobile Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-magizh-blue to-magizh-purple text-transparent bg-clip-text">Transform Your Ideas</span> <br />
              Into Digital Reality
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              We craft custom web and mobile applications that elevate your business. 
              Serving all major industries with next-generation technology solutions.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center text-sm text-gray-600">
                <Check size={16} className="text-magizh-blue mr-1" />
                <span>Innovation-driven</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check size={16} className="text-magizh-blue mr-1" />
                <span>Client-focused</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check size={16} className="text-magizh-blue mr-1" />
                <span>Industry experts</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-magizh-blue hover:bg-magizh-blue/80 text-white text-lg px-8 py-6 rounded-lg shadow-glow-blue transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-magizh-blue text-magizh-blue hover:bg-magizh-blue/5 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:border-magizh-purple hover:text-magizh-purple">
                Our Services
              </Button>
            </div>
            
            <div className="flex items-center pt-8 space-x-8">
              <div>
                <p className="text-sm font-medium text-gray-500">Trusted by:</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">5.0 Rating</p>
                </div>
                <div className="h-8 flex items-center space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-12 bg-gray-200 rounded-md animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md animate-rotate-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-magizh-blue/20 rounded-full filter blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-blue-400/20 rounded-full filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative bg-white p-3 rounded-2xl shadow-hero-card border border-gray-100 backdrop-blur-sm z-10 transition-all duration-300 hover:shadow-glow-blue">
                <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Mobile App Development" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-2 shadow-lg border border-gray-100 animate-pulse-soft">
                  <div className="bg-gradient-to-r from-magizh-blue to-magizh-purple rounded-md p-1.5">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
