import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Users, Globe, Server, Database, Settings, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const industryDetails = [
  {
    icon: <Briefcase className="h-16 w-16 text-magizh-blue" />,
    name: 'Finance & Banking',
    description: 'Secure and efficient solutions for banking, finance, and fintech companies.',
    id: 'finance-banking',
    benefits: [
      'Advanced security protocols to protect sensitive financial data',
      'Streamlined transaction processing systems',
      'Custom fintech solutions for modern banking needs',
      'Regulatory compliance and reporting automation'
    ],
    technologies: ['Blockchain', 'AI-powered fraud detection', 'Cloud computing', 'Microservices architecture'],
    casestudy: 'Helped a regional bank reduce operational costs by 25% through digital transformation initiatives.'
  },
  {
    icon: <Users className="h-16 w-16 text-magizh-purple" />,
    name: 'Healthcare',
    description: 'HIPAA-compliant applications and systems for healthcare providers and services.',
    id: 'healthcare',
    benefits: [
      'Secure patient data management systems',
      'Telemedicine and remote care platforms',
      'Medical practice management solutions',
      'Healthcare analytics and reporting tools'
    ],
    technologies: ['HIPAA-compliant infrastructure', 'Electronic Health Records integration', 'IoT medical devices', 'Healthcare data analytics'],
    casestudy: 'Developed a telemedicine platform that increased patient engagement by 40% for a multi-specialty clinic.'
  },
  {
    icon: <Globe className="h-16 w-16 text-magizh-teal" />,
    name: 'Retail & E-commerce',
    description: 'Engaging shopping experiences and robust management systems.',
    id: 'retail-ecommerce',
    benefits: [
      'Omnichannel retail solutions',
      'Personalized customer experience platforms',
      'Inventory and supply chain optimization',
      'Advanced analytics and reporting dashboards'
    ],
    technologies: ['Headless commerce', 'Progressive Web Apps', 'AI-driven recommendations', 'Real-time inventory systems'],
    casestudy: 'Our e-commerce platform redesign resulted in a 35% increase in conversion rates and 28% higher average order values.'
  },
  {
    icon: <Server className="h-16 w-16 text-magizh-pink" />,
    name: 'Manufacturing',
    description: 'Streamlined operations and process management solutions.',
    id: 'manufacturing',
    benefits: [
      'Production line optimization systems',
      'Quality control automation',
      'Predictive maintenance solutions',
      'Supply chain management and logistics'
    ],
    technologies: ['IoT sensors', 'Digital twins', 'Machine learning for predictive maintenance', 'Industrial automation'],
    casestudy: 'Implemented an IoT-based predictive maintenance system that reduced equipment downtime by 60% for a manufacturing client.'
  },
  {
    icon: <Database className="h-16 w-16 text-magizh-blue" />,
    name: 'Education',
    description: 'Learning management systems and educational technology platforms.',
    id: 'education',
    benefits: [
      'Interactive learning management systems',
      'Student performance analytics',
      'Virtual classroom solutions',
      'Educational content management platforms'
    ],
    technologies: ['Adaptive learning algorithms', 'Video streaming integration', 'Gamification elements', 'Mobile learning apps'],
    casestudy: 'Created a virtual learning environment that improved student engagement by 45% and course completion rates by 30%.'
  },
  {
    icon: <Settings className="h-16 w-16 text-magizh-purple" />,
    name: 'Logistics',
    description: 'Supply chain optimization and tracking systems for logistics companies.',
    id: 'logistics',
    benefits: [
      'Real-time fleet management',
      'Route optimization algorithms',
      'Warehouse management systems',
      'End-to-end supply chain visibility'
    ],
    technologies: ['GPS tracking', 'Predictive analytics', 'RFID integration', 'Automated dispatching systems'],
    casestudy: 'Our logistics management platform helped a regional delivery service reduce fuel costs by 22% while improving on-time deliveries.'
  }
];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-magizh-teal/10 rounded-bl-full -z-10" />
        <div className="absolute bottom-0 left-0 w-1/4 h-40 bg-magizh-purple/5 rounded-tr-full -z-10" />
        
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-magizh-teal/10 text-magizh-teal rounded-full text-sm font-semibold uppercase tracking-wider border border-magizh-teal/20">
              Our Industry Expertise
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-magizh-blue via-magizh-purple to-magizh-teal bg-clip-text text-transparent">
              Transforming Industries
            </span>
            <br /> With Technology Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg"
          >
            We deliver tailor-made technology solutions across diverse sectors, optimizing operations, 
            enhancing experiences, and driving innovation for businesses of all sizes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button size="lg">
                Request a Consultation <ChevronRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Industries Cards Carousel for Mobile */}
      <section className="py-12 px-4 md:hidden">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Industries We Serve</h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {industryDetails.map((industry, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="p-4 rounded-full bg-gray-50 mb-4">
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      <Link to={`/industries/${industry.id}`} className="mt-auto">
                        <Button variant="outline">
                          Learn more
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Detailed Industries Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-magizh-purple/10 text-magizh-purple rounded-full text-sm font-semibold uppercase tracking-wider border border-magizh-purple/20">
              Specialized Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Industry-Specific Technology Expertise
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in each industry. 
              Our solutions are designed to address specific needs while driving innovation.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industryDetails.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:border-magizh-teal hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gray-50 mr-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{industry.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {industry.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-magizh-blue">Key Benefits</h4>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-magizh-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-magizh-purple">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-50 text-sm rounded-full text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-auto">
                  <h4 className="text-lg font-medium mb-2 text-magizh-blue">Success Story</h4>
                  <p className="text-gray-700 text-sm italic">"{industry.casestudy}"</p>
                </div>
                
                <div className="mt-6 text-center">
                  <Link to={`/industries/${industry.id}`}>
                    <Button>
                      Learn More <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-magizh-blue/10 to-magizh-purple/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-magizh-teal/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-magizh-purple/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-3xl font-bold mb-6">Don't See Your Industry?</h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              We work with businesses across all sectors. Our expertise in creating custom technology solutions 
              allows us to address unique challenges in any industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
