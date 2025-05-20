
import { Briefcase, Users, Globe, Server, Database, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industriesList = [
  { 
    icon: <Briefcase className="h-12 w-12 mb-4 text-magizh-blue" />,
    name: 'Finance & Banking',
    description: 'Secure and efficient solutions for banking, finance, and fintech companies.',
    id: 'finance-banking'
  },
  { 
    icon: <Users className="h-12 w-12 mb-4 text-magizh-purple" />,
    name: 'Healthcare', 
    description: 'HIPAA-compliant applications and systems for healthcare providers and services.',
    id: 'healthcare'
  },
  { 
    icon: <Globe className="h-12 w-12 mb-4 text-magizh-teal" />,
    name: 'Retail & E-commerce', 
    description: 'Engaging shopping experiences and robust management systems.',
    id: 'retail-ecommerce'
  },
  { 
    icon: <Server className="h-12 w-12 mb-4 text-magizh-pink" />,
    name: 'Manufacturing', 
    description: 'Streamlined operations and process management solutions.',
    id: 'manufacturing'
  },
  { 
    icon: <Database className="h-12 w-12 mb-4 text-magizh-blue" />,
    name: 'Education', 
    description: 'Learning management systems and educational technology platforms.',
    id: 'education'
  },
  { 
    icon: <Settings className="h-12 w-12 mb-4 text-magizh-purple" />,
    name: 'Logistics', 
    description: 'Supply chain optimization and tracking systems for logistics companies.',
    id: 'logistics'
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-magizh-teal/5 filter blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-magizh-purple/5 filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-magizh-teal/10 text-magizh-teal rounded-full text-sm font-semibold uppercase tracking-wider border border-magizh-teal/20">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 relative">
            <span className="bg-gradient-to-r from-magizh-teal via-magizh-blue to-magizh-purple text-transparent bg-clip-text">
              Transforming Businesses Across Industries
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-magizh-teal/30 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            We work with clients across a wide range of industries, bringing our technical expertise and 
            domain knowledge to provide tailored solutions for each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="industry-card bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              <Link to={`/industries/${industry.id}`} className="block h-full no-underline">
                <div className="flex flex-col items-center p-8 h-full">
                  <div className="p-4 rounded-full bg-gray-50 mb-4 transition-colors duration-300 group-hover:bg-magizh-blue/5">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="mt-auto inline-flex items-center font-medium text-magizh-blue hover:text-magizh-purple transition-colors group">
                    Learn more
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Don't see your industry? We customize solutions for all business types.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center font-medium text-magizh-teal hover:text-magizh-blue transition-colors group"
          >
            Contact us to learn more
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;
