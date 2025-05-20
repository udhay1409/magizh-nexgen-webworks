
import { Code, Smartphone, Globe, Database, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicesList = [
  {
    icon: <Code className="h-10 w-10 text-magizh-blue" />,
    title: 'Web Application Development',
    description: 'Custom web applications with responsive design, intuitive interfaces, and scalable architecture to meet your unique business needs.'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-magizh-purple" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that offer seamless performance and engaging user experiences.'
  },
  {
    icon: <Globe className="h-10 w-10 text-magizh-teal" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance usability and create memorable experiences that keep users coming back.'
  },
  {
    icon: <Database className="h-10 w-10 text-magizh-pink" />,
    title: 'Database Design & Management',
    description: 'Efficient database architecture and management systems that ensure data integrity, security, and optimal performance.'
  },
  {
    icon: <Server className="h-10 w-10 text-magizh-blue" />,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and infrastructure management to support your applications with high availability and reliability.'
  },
  {
    icon: <Code className="h-10 w-10 text-magizh-purple" />,
    title: 'Enterprise Solutions',
    description: 'Comprehensive software solutions for enterprise-level requirements, including ERP, CRM, and custom business applications.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-magizh-blue uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-600">
            We provide end-to-end services for your digital transformation journey, 
            from concept and design to development and maintenance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Card 
              key={index} 
              className="service-card border-0 group hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
            >
              <CardHeader className="border-b pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-magizh-blue/10 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-6 flex">
                  <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-magizh-blue hover:text-magizh-purple transition-colors"
                  >
                    Learn more
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
