
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Database, Server, Layers, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesList = [
  {
    icon: <Code className="h-16 w-16 text-magizh-blue" />,
    title: 'Web Application Development',
    description: 'Custom web applications with responsive design, intuitive interfaces, and scalable architecture to meet your unique business needs.',
    benefits: [
      'Responsive design that works across all devices',
      'Intuitive user interfaces for improved engagement',
      'Scalable architecture for future growth',
      'Integration with existing systems and APIs'
    ],
    technologies: ['React', 'Angular', 'Vue', 'Node.js', 'Django', 'Ruby on Rails'],
    id: 'web-application-development'
  },
  {
    icon: <Smartphone className="h-16 w-16 text-magizh-purple" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that offer seamless performance and engaging user experiences.',
    benefits: [
      'Native performance on iOS and Android platforms',
      'Consistent branding across all devices',
      'Offline functionality for users on the go',
      'Push notifications for improved engagement'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    id: 'mobile-app-development'
  },
  {
    icon: <Globe className="h-16 w-16 text-magizh-teal" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance usability and create memorable experiences that keep users coming back.',
    benefits: [
      'User research-driven design approach',
      'Consistent design language across platforms',
      'Accessibility compliance for all users',
      'Interactive prototypes for early testing'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin'],
    id: 'ui-ux-design'
  },
  {
    icon: <Database className="h-16 w-16 text-magizh-pink" />,
    title: 'Database Design & Management',
    description: 'Efficient database architecture and management systems that ensure data integrity, security, and optimal performance.',
    benefits: [
      'Optimized schema design for performance',
      'Data security and compliance implementation',
      'Automated backup and disaster recovery',
      'Scalable solutions for growing data needs'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server', 'Oracle'],
    id: 'database-design-management'
  },
  {
    icon: <Server className="h-16 w-16 text-magizh-blue" />,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and infrastructure management to support your applications with high availability and reliability.',
    benefits: [
      'Reduced operational costs through optimization',
      'Automated scaling to handle traffic spikes',
      'High availability and disaster recovery',
      'Continuous monitoring and maintenance'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    id: 'cloud-infrastructure'
  },
  {
    icon: <Layers className="h-16 w-16 text-magizh-purple" />,
    title: 'Enterprise Solutions',
    description: 'Comprehensive software solutions for enterprise-level requirements, including ERP, CRM, and custom business applications.',
    benefits: [
      'Streamlined business processes and workflows',
      'Centralized data management across departments',
      'Custom reporting and analytics dashboards',
      'Seamless integration with existing systems'
    ],
    technologies: ['SAP', 'Salesforce', 'Microsoft Dynamics', 'Oracle NetSuite', 'Custom Solutions'],
    id: 'enterprise-solutions'
  }
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

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-magizh-blue/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-magizh-purple/5 rounded-full filter blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="bg-gradient-to-r from-magizh-blue via-magizh-purple to-magizh-teal text-transparent bg-clip-text">Services</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide end-to-end digital transformation solutions tailored to your unique business needs. 
              From concept to deployment and beyond, our expert team is committed to delivering exceptional results.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#services-overview" 
                className="bg-magizh-blue hover:bg-magizh-blue/80 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center"
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                to="/contact" 
                className="border border-magizh-blue text-magizh-blue hover:bg-magizh-blue/10 px-6 py-3 rounded-md transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-magizh-blue/10 text-magizh-blue rounded-full text-sm font-semibold uppercase tracking-wider border border-magizh-blue/20">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 relative">
              <span className="bg-gradient-to-r from-magizh-blue via-magizh-purple to-magizh-teal text-transparent bg-clip-text">
                Comprehensive Digital Solutions
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-magizh-blue/30 rounded-full"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              From planning and design to development and maintenance, we provide the full spectrum 
              of services required for successful digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="service-card"
              >
                <Card className="border-0 h-full transition-all duration-300 hover:shadow-card-hover group overflow-hidden">
                  <CardHeader className="border-b pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-magizh-blue/10 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <h4 className="font-semibold text-lg mb-3 text-magizh-blue">Key Benefits</h4>
                    <ul className="mb-6 space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-magizh-teal mr-2 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-lg mb-3 text-magizh-blue">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center font-medium text-magizh-blue hover:text-magizh-purple transition-colors group"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-magizh-teal/5 filter blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-magizh-purple/5 filter blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-magizh-teal/10 text-magizh-teal rounded-full text-sm font-semibold uppercase tracking-wider border border-magizh-teal/20">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 relative">
              <span className="bg-gradient-to-r from-magizh-teal via-magizh-blue to-magizh-purple text-transparent bg-clip-text">
                Our Approach Makes the Difference
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-magizh-teal/30 rounded-full"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              We combine technical expertise with industry knowledge to deliver solutions
              that not only meet your current needs but prepare you for future challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 mb-4 text-magizh-blue" />,
                title: 'Quality Assurance',
                description: 'Rigorous testing at every stage ensures that all our solutions meet the highest quality standards.'
              },
              {
                icon: <CheckCircle className="h-12 w-12 mb-4 text-magizh-purple" />,
                title: 'On-time Delivery',
                description: 'We understand the importance of timelines and ensure that projects are delivered as promised.'
              },
              {
                icon: <Server className="h-12 w-12 mb-4 text-magizh-teal" />,
                title: 'Scalable Solutions',
                description: 'Our solutions are designed to grow with your business, providing long-term value and adaptability.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="bg-magizh-teal hover:bg-magizh-teal/80 text-white px-6 py-3 rounded-md inline-flex items-center transition-colors duration-300"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
