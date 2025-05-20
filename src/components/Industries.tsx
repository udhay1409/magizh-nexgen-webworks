
import { Briefcase, Users, Globe, Server, Database, Settings } from 'lucide-react';

const industriesList = [
  { 
    icon: <Briefcase className="h-10 w-10 mb-4 text-magizh-blue" />,
    name: 'Finance & Banking',
    description: 'Secure and efficient solutions for banking, finance, and fintech companies.' 
  },
  { 
    icon: <Users className="h-10 w-10 mb-4 text-magizh-purple" />,
    name: 'Healthcare', 
    description: 'HIPAA-compliant applications and systems for healthcare providers and services.' 
  },
  { 
    icon: <Globe className="h-10 w-10 mb-4 text-magizh-teal" />,
    name: 'Retail & E-commerce', 
    description: 'Engaging shopping experiences and robust management systems.' 
  },
  { 
    icon: <Server className="h-10 w-10 mb-4 text-magizh-pink" />,
    name: 'Manufacturing', 
    description: 'Streamlined operations and process management solutions.' 
  },
  { 
    icon: <Database className="h-10 w-10 mb-4 text-magizh-blue" />,
    name: 'Education', 
    description: 'Learning management systems and educational technology platforms.' 
  },
  { 
    icon: <Settings className="h-10 w-10 mb-4 text-magizh-purple" />,
    name: 'Logistics', 
    description: 'Supply chain optimization and tracking systems for logistics companies.' 
  },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-magizh-blue uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Transforming Businesses Across Industries
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We work with clients across a wide range of industries, bringing our technical expertise and 
            domain knowledge to provide tailored solutions for each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((industry, index) => (
            <div 
              key={index}
              className="industry-card text-center"
            >
              <div className="flex flex-col items-center">
                {industry.icon}
                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Don't see your industry? We customize solutions for all business types.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center font-medium text-magizh-blue hover:text-magizh-purple transition-colors"
          >
            Contact us to learn more
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
