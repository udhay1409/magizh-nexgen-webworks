
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Check, ArrowUpRight, Bot, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GetQuoteForm from './GetQuoteForm';

const Hero = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  return (
    <section className="relative min-h-screen bg-gradient-tech neural-network flex items-center pt-16 overflow-hidden">
      {/* Enhanced futuristic pattern background */}
      <div className="absolute inset-0 circuit-lines opacity-20"></div>
      
      {/* Animated tech elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/20 filter blur-[100px] animate-float tech-glow"></div>
      <div className="absolute top-1/4 -left-12 w-64 h-64 rounded-full bg-purple-500/20 animate-float tech-glow-purple" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-32 h-32 rounded-full bg-teal-500/30 animate-float ai-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-pink-500/15 filter blur-[80px] animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Data stream animations */}
      <div className="absolute top-1/2 left-0 w-full h-px data-stream" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-0 w-full h-px data-stream" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-12">
          {/* Enhanced left column with cyberpunk aesthetics */}
          <div className="w-full md:w-1/2 space-y-8 text-left md:pr-8 mb-14 md:mb-0 animate-fade-in px-4">
            {/* Futuristic badge with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-ai rounded-full filter blur-lg opacity-70"></div>
              <span className="relative inline-block py-3 px-6 rounded-full glass-effect text-white text-sm font-semibold border border-blue-500/30 tech-glow">
                <Bot className="inline w-4 h-4 mr-2" />
                Next-Gen AI-Powered Development
              </span>
            </div>
            
            {/* Enhanced typography with cyberpunk effects */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="holographic text-transparent bg-clip-text cyber-text">Transform Ideas</span> <br />
              <span className="text-white">Into Digital</span> <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">Reality</span>
            </h1>
            
            {/* Enhanced description */}
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-xl">
              We craft <span className="text-blue-400 font-semibold">intelligent</span> web and mobile applications 
              using cutting-edge AI technology. Serving industries with <span className="text-purple-400 font-semibold">next-generation</span> solutions.
            </p>
            
            {/* Enhanced feature list with tech icons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center text-gray-300 font-medium group">
                <div className="bg-blue-500/20 p-2 rounded-full mr-3 group-hover:bg-blue-500/30 transition-all tech-border">
                  <Cpu size={20} className="text-blue-400" />
                </div>
                <span className="group-hover:text-blue-400 transition-colors">AI-Powered</span>
              </div>
              <div className="flex items-center text-gray-300 font-medium group">
                <div className="bg-purple-500/20 p-2 rounded-full mr-3 group-hover:bg-purple-500/30 transition-all tech-border">
                  <Zap size={20} className="text-purple-400" />
                </div>
                <span className="group-hover:text-purple-400 transition-colors">Lightning Fast</span>
              </div>
              <div className="flex items-center text-gray-300 font-medium group">
                <div className="bg-teal-500/20 p-2 rounded-full mr-3 group-hover:bg-teal-500/30 transition-all tech-border">
                  <Bot size={20} className="text-teal-400" />
                </div>
                <span className="group-hover:text-teal-400 transition-colors">Smart Solutions</span>
              </div>
            </div>
            
            {/* Enhanced CTA section with futuristic buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="relative bg-gradient-ai text-white text-lg px-8 py-7 rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 tech-glow"
                onClick={() => setShowQuoteForm(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="glass-effect border-blue-500/30 text-blue-400 hover:bg-blue-500/10 text-lg px-8 py-7 rounded-lg transition-all duration-300 hover:border-purple-500/50 hover:text-purple-400 group tech-glow"
                asChild
              >
                <Link to="/services">
                  Our Services
                  <ArrowUpRight className="ml-1 h-4 w-4 transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* Enhanced trust indicators with tech styling */}
            <div className="flex flex-col sm:flex-row sm:items-center pt-8 space-y-5 sm:space-y-0 sm:space-x-8 border-t border-blue-500/20 pt-8">
              <div>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Trusted by:</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center glass-dark px-4 py-2 rounded-lg tech-border">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 mt-1 font-medium">5.0 Rating</p>
                </div>
                <div className="flex items-center space-x-5 glass-dark px-4 py-2 rounded-lg tech-border">
                  {/* Client logos with enhanced styling */}
                  <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity filter hover:brightness-125">
                    <img 
                      src="/lovable-uploads/cc5b20ed-c636-4f11-b85f-7cc7ad174791.png" 
                      alt="Company Logo 1" 
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity filter hover:brightness-125">
                    <img 
                      src="/lovable-uploads/7610d573-5744-48bb-90a6-fef817b2bce9.png" 
                      alt="Company Logo 2" 
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity filter hover:brightness-125">
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
          
          {/* Enhanced right column with holographic card design */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
            <div className="relative w-full max-w-md animate-rotate-in">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[60px] animate-float tech-glow"></div>
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-purple-500/25 rounded-full filter blur-[70px] animate-float tech-glow-purple" style={{ animationDelay: '2s' }}></div>
              
              {/* Enhanced holographic card */}
              <div className="relative glass-dark p-6 rounded-3xl tech-border z-10 transition-all duration-300 hover:scale-105 tech-glow">
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 rounded-3xl circuit-lines opacity-10"></div>
                
                <div className="aspect-[9/16] bg-gradient-neural rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                    alt="AI Robot Development" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 filter brightness-110"
                  />
                  
                  {/* Tech overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-purple-900/30"></div>
                </div>
                
                {/* Enhanced floating badges */}
                <div className="absolute -bottom-6 -right-6 glass-dark rounded-xl p-3 tech-border animate-pulse-soft tech-glow">
                  <div className="holographic rounded-lg p-3">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 glass-dark rounded-xl px-4 py-2 tech-border">
                  <span className="text-sm font-semibold holographic text-transparent bg-clip-text">AI Powered</span>
                </div>
                
                {/* Data visualization element */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-1 bg-blue-400 rounded-full animate-pulse`} style={{ height: `${12 + i * 4}px`, animationDelay: `${i * 0.2}s` }}></div>
                  ))}
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
