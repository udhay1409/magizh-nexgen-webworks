
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-magizh-light to-white flex items-center pt-16">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 text-left md:pr-12 mb-12 md:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-magizh-blue/10 text-magizh-blue text-sm font-medium">
              Web & Mobile App Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-magizh-blue to-blue-600 text-transparent bg-clip-text">Transform Your Ideas</span> <br />
              Into Digital Reality
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              We craft custom web and mobile applications that elevate your business. 
              Serving all major industries with next-generation technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-magizh-blue hover:bg-magizh-blue/80 text-white text-lg px-8 py-6 rounded-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-magizh-blue text-magizh-blue hover:bg-magizh-blue/5 text-lg px-8 py-6 rounded-lg">
                Our Services
              </Button>
            </div>
            
            <div className="flex items-center pt-8 space-x-8">
              <div>
                <p className="text-sm text-gray-500">Trusted by:</p>
              </div>
              <div className="flex space-x-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-magizh-blue/20 rounded-full filter blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-blue-400/20 rounded-full filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 z-10">
                <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Mobile App Development" 
                    className="w-full h-full object-cover"
                  />
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
