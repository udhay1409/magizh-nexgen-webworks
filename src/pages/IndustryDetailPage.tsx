
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Industry data with detailed information
const industriesData = {
  'finance-banking': {
    title: 'Finance & Banking',
    description: 'Secure and efficient solutions for banking, finance, and fintech companies.',
    icon: 'briefcase',
    color: 'text-magizh-blue',
    bgColor: 'bg-magizh-blue/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'We provide cutting-edge technology solutions for banks, financial institutions, and fintech companies that prioritize security, compliance, and exceptional user experience. Our solutions help financial organizations streamline operations, improve customer engagement, and stay ahead in a competitive market.',
    keyBenefits: [
      'Advanced security protocols to protect sensitive financial data',
      'Streamlined transaction processing systems',
      'Custom fintech solutions for modern banking needs',
      'Regulatory compliance and reporting automation',
      'Personalized customer experiences across digital channels',
      'Real-time analytics and business intelligence'
    ],
    challenges: [
      {
        title: 'Data Security',
        description: 'Financial institutions face constant threats from cybercriminals targeting sensitive customer data and financial assets.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Keeping up with evolving regulations like GDPR, PSD2, and AML requires constant vigilance and system updates.'
      },
      {
        title: 'Digital Transformation',
        description: 'Traditional financial institutions struggle to modernize legacy systems while maintaining stability and security.'
      },
      {
        title: 'Fintech Competition',
        description: 'New market entrants with innovative technologies are disrupting traditional banking models.'
      }
    ],
    solutions: [
      {
        title: 'Secure Banking Platforms',
        description: 'Custom-built digital banking platforms with multi-layer security protocols and fraud detection systems.'
      },
      {
        title: 'Compliance Management Systems',
        description: 'Automated solutions for monitoring, reporting, and maintaining regulatory compliance across operations.'
      },
      {
        title: 'Mobile Banking Applications',
        description: 'User-friendly mobile apps that provide secure access to accounts, payments, and financial services.'
      },
      {
        title: 'Financial Analytics Dashboards',
        description: 'Real-time data visualization tools for monitoring performance, risk, and customer behavior.'
      }
    ],
    technologies: [
      'Blockchain', 'AI-powered fraud detection', 'Cloud computing', 'Microservices architecture',
      'Biometric authentication', 'Predictive analytics', 'API banking', 'Robotic Process Automation'
    ],
    caseStudy: {
      title: 'Regional Bank Digital Transformation',
      description: 'We helped a regional bank modernize their digital infrastructure, resulting in improved operational efficiency and enhanced customer experiences.',
      results: [
        'Reduced operational costs by 25%',
        'Increased mobile banking adoption by 40%',
        'Improved customer satisfaction scores by 35%',
        'Achieved 99.99% system uptime'
      ]
    }
  },
  'healthcare': {
    title: 'Healthcare',
    description: 'HIPAA-compliant applications and systems for healthcare providers and services.',
    icon: 'users',
    color: 'text-magizh-purple',
    bgColor: 'bg-magizh-purple/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'We develop secure, HIPAA-compliant solutions for healthcare providers, clinics, hospitals, and medical services that improve patient care, streamline administrative tasks, and enhance operational efficiency while maintaining the highest standards of data privacy and security.',
    keyBenefits: [
      'Secure patient data management systems',
      'Telemedicine and remote care platforms',
      'Medical practice management solutions',
      'Healthcare analytics and reporting tools',
      'Simplified patient engagement and communication',
      'Streamlined billing and insurance processing'
    ],
    challenges: [
      {
        title: 'Patient Data Security',
        description: 'Healthcare organizations must protect sensitive patient information while making it accessible to authorized personnel.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Adhering to HIPAA, HITECH, and other healthcare regulations requires specialized knowledge and systems.'
      },
      {
        title: 'Interoperability',
        description: 'Healthcare systems need to communicate and share data seamlessly across different platforms and providers.'
      },
      {
        title: 'User Experience',
        description: 'Creating intuitive interfaces for medical professionals and patients with varying levels of technical expertise.'
      }
    ],
    solutions: [
      {
        title: 'Electronic Health Record Systems',
        description: 'Secure and user-friendly EHR solutions that streamline patient data management and clinical workflows.'
      },
      {
        title: 'Telemedicine Platforms',
        description: 'HIPAA-compliant video consultation systems that enable remote patient care and monitoring.'
      },
      {
        title: 'Medical Practice Management',
        description: 'Comprehensive solutions for appointment scheduling, billing, inventory, and administrative tasks.'
      },
      {
        title: 'Healthcare Analytics',
        description: 'Data analysis tools that provide insights into patient outcomes, operational efficiency, and financial performance.'
      }
    ],
    technologies: [
      'HIPAA-compliant infrastructure', 'Electronic Health Records integration', 'IoT medical devices', 
      'Healthcare data analytics', 'Secure cloud storage', 'Blockchain for medical records', 
      'Natural Language Processing', 'Medical imaging processing'
    ],
    caseStudy: {
      title: 'Multi-Specialty Clinic Telemedicine Solution',
      description: 'We developed a comprehensive telemedicine platform for a multi-specialty clinic that enabled them to continue providing care during the pandemic and beyond.',
      results: [
        'Increased patient engagement by 40%',
        'Reduced appointment no-shows by 30%',
        'Extended care to patients in remote locations',
        'Generated new revenue streams through virtual consultations'
      ]
    }
  },
  'retail-ecommerce': {
    title: 'Retail & E-commerce',
    description: 'Engaging shopping experiences and robust management systems.',
    icon: 'globe',
    color: 'text-magizh-teal',
    bgColor: 'bg-magizh-teal/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'We create innovative e-commerce platforms and retail management systems that deliver exceptional shopping experiences, streamline operations, and drive sales growth. Our solutions help retailers compete effectively in both online and physical marketplaces through personalization, efficiency, and data-driven insights.',
    keyBenefits: [
      'Omnichannel retail solutions',
      'Personalized customer experience platforms',
      'Inventory and supply chain optimization',
      'Advanced analytics and reporting dashboards',
      'Mobile commerce capabilities',
      'Seamless payment processing integration'
    ],
    challenges: [
      {
        title: 'Omnichannel Integration',
        description: 'Creating consistent customer experiences across physical stores, websites, mobile apps, and social media platforms.'
      },
      {
        title: 'Customer Expectations',
        description: 'Meeting increasingly high customer expectations for personalization, convenience, and instant gratification.'
      },
      {
        title: 'Inventory Management',
        description: 'Maintaining optimal inventory levels across multiple channels and locations to avoid stockouts and overstock.'
      },
      {
        title: 'Market Competition',
        description: 'Standing out in a crowded marketplace where customers have endless shopping options at their fingertips.'
      }
    ],
    solutions: [
      {
        title: 'E-commerce Platforms',
        description: 'Custom-built online stores with intuitive interfaces, robust product management, and seamless checkout experiences.'
      },
      {
        title: 'Omnichannel Retail Systems',
        description: 'Integrated solutions that unify online and offline retail operations for consistent customer experiences.'
      },
      {
        title: 'Inventory Management',
        description: 'Real-time inventory tracking and management systems that optimize stock levels and prevent disruptions.'
      },
      {
        title: 'Customer Analytics Platforms',
        description: 'Data-driven tools that provide insights into customer behavior, preferences, and buying patterns.'
      }
    ],
    technologies: [
      'Headless commerce', 'Progressive Web Apps', 'AI-driven recommendations', 'Real-time inventory systems',
      'AR/VR for product visualization', 'Mobile commerce apps', 'IoT for smart retail', 'Personalization engines'
    ],
    caseStudy: {
      title: 'Fashion Retailer Digital Transformation',
      description: 'We redesigned and rebuilt the e-commerce platform for a fashion retailer, creating a seamless omnichannel experience that significantly improved customer engagement and sales.',
      results: [
        '35% increase in conversion rates',
        '28% higher average order values',
        '45% reduction in cart abandonment',
        'Successful integration with physical store inventory and POS systems'
      ]
    }
  },
  'manufacturing': {
    title: 'Manufacturing',
    description: 'Streamlined operations and process management solutions.',
    icon: 'server',
    color: 'text-magizh-pink',
    bgColor: 'bg-magizh-pink/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'We provide advanced technological solutions for manufacturing companies that improve operational efficiency, reduce costs, and enhance product quality. Our expertise helps manufacturers embrace Industry 4.0 concepts and implement smart manufacturing practices to stay competitive in a rapidly evolving global market.',
    keyBenefits: [
      'Production line optimization systems',
      'Quality control automation',
      'Predictive maintenance solutions',
      'Supply chain management and logistics',
      'Resource utilization improvement',
      'Real-time production monitoring'
    ],
    challenges: [
      {
        title: 'Operational Efficiency',
        description: 'Maximizing productivity while minimizing waste, downtime, and resource consumption.'
      },
      {
        title: 'Quality Control',
        description: 'Maintaining consistent product quality across high-volume production processes.'
      },
      {
        title: 'Equipment Maintenance',
        description: 'Preventing costly equipment failures and production interruptions through timely maintenance.'
      },
      {
        title: 'Supply Chain Complexity',
        description: 'Managing complex global supply chains with multiple partners, vendors, and logistics providers.'
      }
    ],
    solutions: [
      {
        title: 'Manufacturing Execution Systems',
        description: 'Comprehensive software solutions that monitor, track, and control manufacturing operations in real-time.'
      },
      {
        title: 'Predictive Maintenance Platforms',
        description: 'IoT-based systems that monitor equipment health and predict failures before they occur.'
      },
      {
        title: 'Quality Management Systems',
        description: 'Automated quality control and assurance processes that identify defects and maintain product standards.'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'End-to-end supply chain visibility and management solutions that improve efficiency and reduce costs.'
      }
    ],
    technologies: [
      'IoT sensors', 'Digital twins', 'Machine learning for predictive maintenance', 'Industrial automation',
      'RFID tracking', 'Computer vision for quality control', 'Cloud manufacturing', 'Industrial IoT platforms'
    ],
    caseStudy: {
      title: 'Automotive Parts Manufacturer Modernization',
      description: 'We implemented an IoT-based predictive maintenance system for an automotive parts manufacturer that significantly reduced equipment downtime and improved production efficiency.',
      results: [
        'Reduced equipment downtime by 60%',
        'Improved overall equipment effectiveness (OEE) by 25%',
        'Decreased maintenance costs by 30%',
        'Enhanced product quality with defect rates falling by 40%'
      ]
    }
  },
  'education': {
    title: 'Education',
    description: 'Learning management systems and educational technology platforms.',
    icon: 'database',
    color: 'text-magizh-blue',
    bgColor: 'bg-magizh-blue/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'We develop innovative educational technology solutions that enhance teaching and learning experiences for schools, universities, and online education providers. Our platforms support diverse learning models and help educational institutions adapt to changing student needs and technological advancements.',
    keyBenefits: [
      'Interactive learning management systems',
      'Student performance analytics',
      'Virtual classroom solutions',
      'Educational content management platforms',
      'Adaptive learning technologies',
      'Administrative process automation'
    ],
    challenges: [
      {
        title: 'Engagement and Retention',
        description: 'Creating digital learning experiences that maintain student interest and motivation over time.'
      },
      {
        title: 'Accessibility',
        description: 'Ensuring educational content and platforms are accessible to all students, including those with disabilities.'
      },
      {
        title: 'Data Privacy',
        description: 'Protecting sensitive student information while using it to personalize and improve learning experiences.'
      },
      {
        title: 'Technical Infrastructure',
        description: 'Building systems that function effectively across varying levels of technological infrastructure and expertise.'
      }
    ],
    solutions: [
      {
        title: 'Learning Management Systems',
        description: 'Comprehensive platforms for course delivery, student engagement, assessment, and progress tracking.'
      },
      {
        title: 'Virtual Classroom Platforms',
        description: 'Interactive online learning environments that facilitate real-time teaching, collaboration, and assessment.'
      },
      {
        title: 'Educational Analytics',
        description: 'Data analysis tools that provide insights into student performance, engagement, and learning patterns.'
      },
      {
        title: 'Content Management Systems',
        description: 'Specialized platforms for creating, organizing, and delivering educational content across multiple formats.'
      }
    ],
    technologies: [
      'Adaptive learning algorithms', 'Video streaming integration', 'Gamification elements', 'Mobile learning apps',
      'AI for personalized learning', 'Virtual and augmented reality', 'Collaborative tools', 'Assessment platforms'
    ],
    caseStudy: {
      title: 'University Virtual Learning Environment',
      description: 'We created a comprehensive virtual learning environment for a university that enabled them to offer fully online degree programs and enhance their traditional in-person courses.',
      results: [
        'Improved student engagement by 45%',
        'Increased course completion rates by 30%',
        'Extended educational reach to international students',
        'Reduced administrative workload by 35% through automation'
      ]
    }
  },
  'logistics': {
    title: 'Logistics',
    description: 'Supply chain optimization and tracking systems for logistics companies.',
    icon: 'settings',
    color: 'text-magizh-purple',
    bgColor: 'bg-magizh-purple/10',
    mainImage: '/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png',
    overview: 'We provide comprehensive technology solutions for logistics and supply chain companies that enhance visibility, improve efficiency, and optimize operations. Our systems help logistics providers track shipments in real-time, optimize routes, and deliver exceptional service to their customers.',
    keyBenefits: [
      'Real-time fleet management',
      'Route optimization algorithms',
      'Warehouse management systems',
      'End-to-end supply chain visibility',
      'Delivery performance analytics',
      'Customer communication automation'
    ],
    challenges: [
      {
        title: 'Visibility and Tracking',
        description: 'Maintaining real-time visibility of shipments, vehicles, and inventory across complex supply chains.'
      },
      {
        title: 'Efficiency Optimization',
        description: 'Finding the most efficient routes, schedules, and resource allocations in constantly changing conditions.'
      },
      {
        title: 'Last-Mile Delivery',
        description: 'Managing the most costly and complex part of the delivery process while meeting customer expectations.'
      },
      {
        title: 'Data Integration',
        description: 'Connecting multiple systems, partners, and data sources into a cohesive operational platform.'
      }
    ],
    solutions: [
      {
        title: 'Logistics Management Platforms',
        description: 'End-to-end systems for managing transportation, warehousing, inventory, and delivery operations.'
      },
      {
        title: 'Route Optimization Systems',
        description: 'AI-powered solutions that calculate the most efficient delivery routes based on multiple variables.'
      },
      {
        title: 'Warehouse Management Systems',
        description: 'Comprehensive platforms for inventory tracking, order fulfillment, and warehouse operations.'
      },
      {
        title: 'Shipment Tracking Applications',
        description: 'Real-time tracking solutions that provide visibility to both logistics companies and their customers.'
      }
    ],
    technologies: [
      'GPS tracking', 'Predictive analytics', 'RFID integration', 'Automated dispatching systems',
      'Machine learning for demand forecasting', 'IoT sensors', 'Blockchain for supply chain', 'Mobile workforce apps'
    ],
    caseStudy: {
      title: 'Regional Delivery Service Optimization',
      description: 'We implemented a logistics management platform for a regional delivery service that significantly improved operational efficiency and customer satisfaction.',
      results: [
        'Reduced fuel costs by 22%',
        'Improved on-time delivery rates by 35%',
        'Increased driver productivity by 30%',
        'Enhanced customer satisfaction with real-time tracking capabilities'
      ]
    }
  }
};

const IndustryDetailPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industriesData[industryId as keyof typeof industriesData];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
            <p className="text-gray-600 mb-6">The industry you're looking for doesn't exist or has been moved.</p>
            <Link to="/industries">
              <Button>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Industries
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
        <div className={`absolute top-0 right-0 w-1/3 h-1/3 ${industry.bgColor} rounded-full filter blur-3xl opacity-30`} />
        <div className={`absolute bottom-0 left-0 w-1/4 h-1/4 ${industry.bgColor} rounded-full filter blur-3xl opacity-20`} />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <Link 
                to="/industries" 
                className="inline-flex items-center text-gray-600 hover:text-magizh-blue transition-colors mb-6"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Back to Industries
              </Link>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className={industry.color}>{industry.title}</span> Solutions
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {industry.overview}
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
              <div className={`rounded-lg ${industry.bgColor} p-6 shadow-xl`}>
                <img 
                  src={industry.mainImage} 
                  alt={industry.title} 
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 ${industry.bgColor} ${industry.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Why Choose Our {industry.title} Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide specialized technology solutions designed specifically for the {industry.title.toLowerCase()} industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start">
                  <CheckCircle className={`h-6 w-6 ${industry.color} mr-3 flex-shrink-0 mt-1`} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 ${industry.bgColor} ${industry.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
              Industry Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding the unique challenges faced by {industry.title.toLowerCase()} companies allows us to create effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Common Challenges</h3>
              <div className="space-y-6">
                {industry.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h4 className="text-xl font-medium mb-2">{challenge.title}</h4>
                    <p className="text-gray-600">{challenge.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Solutions</h3>
              <div className="space-y-6">
                {industry.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${industry.bgColor} p-6 rounded-lg shadow-md`}
                  >
                    <h4 className="text-xl font-medium mb-2">{solution.title}</h4>
                    <p className="text-gray-700">{solution.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 ${industry.bgColor} ${industry.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
              Tools & Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We leverage modern technologies specifically suited for {industry.title.toLowerCase()} applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industry.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`px-6 py-3 ${industry.bgColor} rounded-full text-gray-800`}
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
            <span className={`inline-block px-4 py-1.5 ${industry.bgColor} ${industry.color} rounded-full text-sm font-semibold uppercase tracking-wider`}>
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
              <h3 className="text-2xl font-bold mb-4">{industry.caseStudy.title}</h3>
              <p className="text-gray-600 mb-8">{industry.caseStudy.description}</p>
              
              <h4 className="text-lg font-semibold mb-4">Key Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industry.caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 ${industry.color} mr-2 flex-shrink-0 mt-1`} />
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
            className={`${industry.bgColor} p-10 rounded-2xl shadow-lg max-w-4xl mx-auto text-center`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your {industry.title} Business?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our technology solutions can address your specific challenges and help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-magizh-blue hover:bg-magizh-blue/80">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/industries">
                <Button size="lg" variant="outline" className="bg-white">
                  Explore Other Industries
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

export default IndustryDetailPage;
