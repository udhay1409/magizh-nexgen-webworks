
import { Code, Smartphone, Globe, Database, Server, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const servicesList = [
  {
    icon: <Code className="h-12 w-12 text-magizh-blue" />,
    title: 'Web Application Development',
    description: 'Custom web applications with responsive design, intuitive interfaces, and scalable architecture to meet your unique business needs.',
    id: 'web-application-development'
  },
  {
    icon: <Smartphone className="h-12 w-12 text-magizh-purple" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that offer seamless performance and engaging user experiences.',
    id: 'mobile-app-development'
  },
  {
    icon: <Globe className="h-12 w-12 text-magizh-teal" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance usability and create memorable experiences that keep users coming back.',
    id: 'ui-ux-design'
  },
  {
    icon: <Database className="h-12 w-12 text-magizh-pink" />,
    title: 'Database Design & Management',
    description: 'Efficient database architecture and management systems that ensure data integrity, security, and optimal performance.',
    id: 'database-design-management'
  },
  {
    icon: <Server className="h-12 w-12 text-magizh-blue" />,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and infrastructure management to support your applications with high availability and reliability.',
    id: 'cloud-infrastructure'
  },
  {
    icon: <Layers className="h-12 w-12 text-magizh-purple" />,
    title: 'Enterprise Solutions',
    description: 'Comprehensive software solutions for enterprise-level requirements, including ERP, CRM, and custom business applications.',
    id: 'enterprise-solutions'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-magizh-purple/5 filter blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-magizh-blue/5 filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-magizh-blue/10 text-magizh-blue rounded-full text-sm font-semibold uppercase tracking-wider border border-magizh-blue/20">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 relative">
            <span className="bg-gradient-to-r from-magizh-blue via-magizh-purple to-magizh-teal text-transparent bg-clip-text">
              Comprehensive Digital Solutions
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-magizh-blue/30 rounded-full"></div>
          </h2>
          <p className="text-gray-600 mt-6">
            We provide end-to-end services for your digital transformation journey, 
            from concept and design to development and maintenance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Card 
              key={index} 
              className="service-card border-0 group hover:scale-[1.03] transition-transform duration-300 overflow-hidden shadow-md hover:shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="border-b pb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-magizh-blue/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-6 flex">
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center font-medium text-magizh-blue hover:text-magizh-purple transition-colors group"
                  >
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
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
