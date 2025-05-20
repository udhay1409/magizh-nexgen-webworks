
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Service data with detailed information
const servicesData = {
  'web-application-development': {
    title: 'Web Application Development',
    description: 'Custom web applications with responsive design, intuitive interfaces, and scalable architecture to meet your unique business needs.',
    icon: 'code',
    color: 'text-magizh-blue',
    bgColor: 'bg-magizh-blue/10',
    mainImage: '/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png',
    overview: 'Our web application development services help businesses create powerful, scalable, and user-friendly web applications that drive growth and operational efficiency. We combine cutting-edge technologies with best practices to deliver solutions that exceed expectations.',
    keyFeatures: [
      'Responsive design that works across all devices and screen sizes',
      'Intuitive user interfaces designed for optimal user experience',
      'Secure and scalable architecture for future growth',
      'Integration capabilities with existing systems and third-party APIs',
      'Performance optimization for fast loading times',
      'Comprehensive testing and quality assurance'
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We work with you to understand your business objectives, target audience, and technical requirements.'
      },
      {
        title: 'Design & Prototyping',
        description: 'Our designers create wireframes and interactive prototypes to visualize the application before development.'
      },
      {
        title: 'Development',
        description: 'Our development team brings the designs to life using modern technologies and frameworks.'
      },
      {
        title: 'Testing & QA',
        description: 'Rigorous testing ensures your application functions flawlessly across all scenarios and devices.'
      },
      {
        title: 'Deployment',
        description: 'We handle the deployment process to ensure a smooth transition to production.'
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing support and maintenance to keep your application running optimally.'
      }
    ],
    technologies: [
      'React', 'Angular', 'Vue.js', 'Node.js', 'Express', 'Django', 'Ruby on Rails', 
      'PostgreSQL', 'MongoDB', 'MySQL', 'AWS', 'Azure', 'Google Cloud'
    ],
    caseStudy: {
      title: 'E-Commerce Platform Transformation',
      description: 'We helped a retail client transform their outdated website into a modern e-commerce platform, resulting in a 45% increase in online sales and a 60% reduction in cart abandonment rate.',
      results: [
        '45% increase in online sales',
        '60% reduction in cart abandonment',
        '3x faster page loading times',
        'Seamless integration with inventory management system'
      ]
    }
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that offer seamless performance and engaging user experiences.',
    icon: 'smartphone',
    color: 'text-magizh-purple',
    bgColor: 'bg-magizh-purple/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'Our mobile application development services enable businesses to engage with their customers on iOS and Android devices through intuitive, high-performance apps. We specialize in both native and cross-platform development to ensure the perfect balance of functionality, user experience, and cost-effectiveness.',
    keyFeatures: [
      'Native development for iOS and Android platforms',
      'Cross-platform solutions using React Native and Flutter',
      'Consistent branding and user experience across all devices',
      'Offline functionality for users on the go',
      'Push notifications and engagement features',
      'Integration with device hardware (camera, GPS, etc.)'
    ],
    process: [
      {
        title: 'Market Research',
        description: 'We analyze your target audience and competitor apps to identify opportunities and requirements.'
      },
      {
        title: 'UI/UX Design',
        description: 'Our designers create intuitive interfaces following platform-specific design guidelines.'
      },
      {
        title: 'Development',
        description: 'Our development team builds your app using the most appropriate technologies.'
      },
      {
        title: 'Testing',
        description: 'We test your app across various devices and scenarios to ensure quality.'
      },
      {
        title: 'Deployment',
        description: 'We handle the submission and publishing process on the App Store and Google Play.'
      },
      {
        title: 'Post-Launch Support',
        description: 'We provide ongoing maintenance, updates, and support for your mobile application.'
      }
    ],
    technologies: [
      'Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 'Firebase',
      'GraphQL', 'RESTful APIs', 'OAuth', 'Socket.io', 'AWS Amplify'
    ],
    caseStudy: {
      title: 'Healthcare Provider Mobile App',
      description: 'We developed a patient engagement mobile app for a healthcare provider that streamlined appointment scheduling and improved patient communication.',
      results: [
        '35% reduction in appointment no-shows',
        '42% increase in patient satisfaction scores',
        '28% decrease in call center volume',
        'Secure integration with electronic health records'
      ]
    }
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance usability and create memorable experiences that keep users coming back.',
    icon: 'globe',
    color: 'text-magizh-teal',
    bgColor: 'bg-magizh-teal/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'Our UI/UX design services focus on creating intuitive, engaging, and accessible digital experiences that delight users and achieve business goals. We combine design thinking, user research, and visual design expertise to create interfaces that users love to interact with.',
    keyFeatures: [
      'User research and persona development',
      'Information architecture and user flow mapping',
      'Wireframing and interactive prototyping',
      'Visual design and branding consistency',
      'Accessibility compliance',
      'Usability testing and iterative improvement'
    ],
    process: [
      {
        title: 'Research & Discovery',
        description: 'We conduct user research, stakeholder interviews, and competitive analysis to inform our design approach.'
      },
      {
        title: 'User Journey Mapping',
        description: 'We map out user flows and information architecture to create intuitive navigation.'
      },
      {
        title: 'Wireframing',
        description: 'Low-fidelity mockups help visualize layout and functionality early in the process.'
      },
      {
        title: 'Visual Design',
        description: 'We create high-fidelity designs that align with your brand and appeal to your target audience.'
      },
      {
        title: 'Prototyping',
        description: 'Interactive prototypes allow for testing and validation before development begins.'
      },
      {
        title: 'Handoff & Implementation',
        description: 'We provide developers with all necessary assets and specifications.'
      }
    ],
    technologies: [
      'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Principle',
      'UserTesting', 'Hotjar', 'Adobe Creative Cloud', 'Axure'
    ],
    caseStudy: {
      title: 'Financial Service Platform Redesign',
      description: 'We redesigned a complex financial service platform to improve user experience and increase customer retention.',
      results: [
        '53% improvement in task completion rates',
        '40% reduction in customer support inquiries',
        '65% increase in user engagement',
        'Significant improvement in customer satisfaction metrics'
      ]
    }
  },
  'database-design-management': {
    title: 'Database Design & Management',
    description: 'Efficient database architecture and management systems that ensure data integrity, security, and optimal performance.',
    icon: 'database',
    color: 'text-magizh-pink',
    bgColor: 'bg-magizh-pink/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'Our database design and management services help organizations optimize the way they store, access, and manage their data. We create efficient, secure, and scalable database solutions that form the foundation of reliable information systems.',
    keyFeatures: [
      'Optimized schema design for performance and scalability',
      'Data security implementation and compliance',
      'Data migration and integration services',
      'Automated backup and disaster recovery systems',
      'Performance tuning and query optimization',
      'Monitoring and maintenance solutions'
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'We work with you to understand your data needs, volume, and access patterns.'
      },
      {
        title: 'Database Architecture',
        description: 'We design the optimal database structure based on your requirements.'
      },
      {
        title: 'Implementation',
        description: 'We set up and configure the database system according to best practices.'
      },
      {
        title: 'Data Migration',
        description: 'We safely migrate data from existing systems to the new database.'
      },
      {
        title: 'Testing & Optimization',
        description: 'We test and tune the database for optimal performance.'
      },
      {
        title: 'Documentation & Training',
        description: 'We provide comprehensive documentation and training for your team.'
      }
    ],
    technologies: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle', 'Redis',
      'Elasticsearch', 'Cassandra', 'DynamoDB', 'Firebase Firestore'
    ],
    caseStudy: {
      title: 'Manufacturing Data Transformation',
      description: 'We redesigned the database architecture for a manufacturing company, improving operational efficiency and enabling real-time analytics.',
      results: [
        '75% improvement in query performance',
        '99.99% uptime achieved through redundancy',
        'Real-time analytics capabilities enabled',
        'Seamless integration with IoT devices on the production line'
      ]
    }
  },
  'cloud-infrastructure': {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and infrastructure management to support your applications with high availability and reliability.',
    icon: 'server',
    color: 'text-magizh-blue',
    bgColor: 'bg-magizh-blue/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'Our cloud infrastructure services help businesses leverage the power of cloud computing for improved scalability, reliability, and cost-efficiency. We design, implement, and manage cloud environments that provide the perfect foundation for your applications and services.',
    keyFeatures: [
      'Cloud migration strategy and implementation',
      'Infrastructure as Code (IaC) for automated provisioning',
      'Auto-scaling architecture for handling traffic spikes',
      'High availability and disaster recovery solutions',
      'Continuous monitoring and maintenance',
      'Cost optimization and resource management'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'We analyze your current infrastructure and requirements to plan the optimal cloud strategy.'
      },
      {
        title: 'Architecture Design',
        description: 'We design a cloud architecture tailored to your specific needs and requirements.'
      },
      {
        title: 'Migration Planning',
        description: 'We create a detailed plan for migrating your applications and data to the cloud.'
      },
      {
        title: 'Implementation',
        description: 'We set up and configure your cloud infrastructure using Infrastructure as Code principles.'
      },
      {
        title: 'Testing & Validation',
        description: 'We thoroughly test the infrastructure to ensure reliability and performance.'
      },
      {
        title: 'Ongoing Management',
        description: 'We provide continuous monitoring, optimization, and support for your cloud environment.'
      }
    ],
    technologies: [
      'AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Kubernetes', 'Docker',
      'Terraform', 'Ansible', 'Jenkins', 'Prometheus', 'Grafana', 'ELK Stack'
    ],
    caseStudy: {
      title: 'E-Learning Platform Cloud Migration',
      description: 'We helped an educational technology company migrate their platform to a cloud-based infrastructure, improving performance and reducing operational costs.',
      results: [
        '40% reduction in infrastructure costs',
        '99.99% availability achieved',
        '3x improvement in application performance',
        'Ability to handle 10x traffic spikes during peak enrollment periods'
      ]
    }
  },
  'enterprise-solutions': {
    title: 'Enterprise Solutions',
    description: 'Comprehensive software solutions for enterprise-level requirements, including ERP, CRM, and custom business applications.',
    icon: 'layers',
    color: 'text-magizh-purple',
    bgColor: 'bg-magizh-purple/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'Our enterprise solutions help large organizations streamline operations, improve efficiency, and drive digital transformation. We develop and implement custom enterprise applications, ERP systems, CRM platforms, and other business-critical software tailored to your specific requirements.',
    keyFeatures: [
      'Custom ERP and CRM implementation',
      'Legacy system modernization',
      'Business process automation',
      'Enterprise application integration',
      'Business intelligence and analytics dashboards',
      'Workflow optimization and management'
    ],
    process: [
      {
        title: 'Business Analysis',
        description: 'We conduct a thorough analysis of your business processes and requirements.'
      },
      {
        title: 'Solution Architecture',
        description: 'We design a comprehensive solution architecture that addresses your specific needs.'
      },
      {
        title: 'Development & Customization',
        description: 'We develop and customize the solution based on your requirements.'
      },
      {
        title: 'System Integration',
        description: 'We ensure seamless integration with your existing systems and data sources.'
      },
      {
        title: 'Testing & Quality Assurance',
        description: 'We conduct rigorous testing to ensure reliability and performance.'
      },
      {
        title: 'Training & Rollout',
        description: 'We provide comprehensive training and support during the deployment phase.'
      }
    ],
    technologies: [
      'SAP', 'Salesforce', 'Microsoft Dynamics', 'Oracle NetSuite', 'Odoo',
      'Custom Solutions', 'Java Enterprise', '.NET', 'Spring Framework', 'Hibernate'
    ],
    caseStudy: {
      title: 'Manufacturing ERP Implementation',
      description: 'We implemented a custom ERP solution for a manufacturing company, streamlining operations and improving supply chain management.',
      results: [
        '35% improvement in operational efficiency',
        '25% reduction in inventory costs',
        'Real-time visibility into production and supply chain',
        'Centralized data management across all departments'
      ]
    }
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId as keyof typeof servicesData];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
            <Link to="/services">
              <Button>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Services
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className={`absolute top-0 right-0 w-1/3 h-1/3 ${service.bgColor} rounded-full filter blur-3xl opacity-30`} />
        <div className={`absolute bottom-0 left-0 w-1/4 h-1/4 ${service.bgColor} rounded-full filter blur-3xl opacity-20`} />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <Link 
                to="/services" 
                className="inline-flex items-center text-gray-600 hover:text-magizh-blue transition-colors mb-6"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Back to Services
              </Link>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className={service.color}>{service.title}</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.overview}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/contact">
                  <Button className={`bg-magizh-blue hover:bg-magizh-blue/80 text-white`}>
                    Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`rounded-lg ${service.bgColor} p-6 shadow-xl`}>
                <img 
                  src={service.mainImage} 
                  alt={service.title} 
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 ${service.bgColor} ${service.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our {service.title.toLowerCase()} services provide a range of features designed to help your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start">
                  <CheckCircle className={`h-6 w-6 ${service.color} mr-3 flex-shrink-0 mt-1`} />
                  <p className="text-gray-700">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 ${service.bgColor} ${service.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Development Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured process to ensure successful delivery of your {service.title.toLowerCase()} project.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className="md:w-1/2 p-4">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} p-6 bg-white rounded-lg shadow-md`}>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 my-4 md:my-0">
                    <div className={`h-10 w-10 rounded-full ${service.bgColor} ${service.color} flex items-center justify-center font-bold border-4 border-white`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-4 md:p-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 ${service.bgColor} ${service.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
              Tools & Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We leverage modern technologies and frameworks to deliver high-quality solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`px-6 py-3 ${service.bgColor} rounded-full text-gray-800`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 ${service.bgColor} ${service.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
              Success Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Case Study
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">{service.caseStudy.title}</h3>
              <p className="text-gray-600 mb-8">{service.caseStudy.description}</p>
              
              <h4 className="text-lg font-semibold mb-4">Key Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 ${service.color} mr-2 flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${service.bgColor} p-10 rounded-2xl shadow-lg max-w-4xl mx-auto text-center`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your {service.title.toLowerCase()} needs and discover how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-magizh-blue hover:bg-magizh-blue/80">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-white">
                  Explore Other Services
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

export default ServiceDetailPage;
