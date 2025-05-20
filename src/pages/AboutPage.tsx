
import { ArrowRight, Award, Building, Calendar, Code, Flag, Headset, LayoutGrid, LifeBuoy, Mail, MessageSquare, Phone, Server, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import TechLogo from "@/components/TechLogo";

const AboutPage = () => {
  const timeline = [
    {
      year: 2020,
      title: "Company Founded",
      description: "Established in Ramanathapuram with a vision to provide innovative IT solutions.",
      icon: <Calendar className="text-magizh-blue" />
    },
    {
      year: 2023,
      title: "Expansion to Madurai",
      description: "Relocated to Madurai and established as a professional IT service company with expanded operations.",
      icon: <Building className="text-magizh-purple" />
    },
    {
      year: 2023,
      title: "Team Growth",
      description: "Built strong departmental teams across multiple disciplines to serve diverse client needs.",
      icon: <Users className="text-magizh-teal" />
    }
  ];

  const departments = [
    { name: "Marketing", icon: <Flag className="text-magizh-blue" /> },
    { name: "Sales", icon: <Star className="text-magizh-purple" /> },
    { name: "Business Analysis", icon: <Award className="text-magizh-teal" /> },
    { name: "UX & UI Design", icon: <LayoutGrid className="text-magizh-pink" /> },
    { name: "Development Teams", icon: <Code className="text-magizh-blue" /> },
    { name: "Quality Assurance", icon: <Award className="text-magizh-purple" /> },
    { name: "Cloud Operations", icon: <Server className="text-magizh-teal" /> },
    { name: "Customer Support", icon: <Headset className="text-magizh-pink" /> }
  ];

  const leadership = [
    {
      name: "Udhayaseelan Renganathan",
      role: "Founder",
      image: "/lovable-uploads/f989be9d-7bb0-4982-93fe-adabd5ab7f72.png",
      description: "With over 15 years of experience in the IT industry, Udhayaseelan founded Magizh NexGen Technologies with a vision to deliver innovative digital solutions that empower businesses across the globe."
    },
    {
      name: "Rahavi Udhayaseelan",
      role: "CEO & Managing Director",
      image: "/lovable-uploads/df0f513c-5b55-4033-a587-aca4ed23b5ec.png",
      description: "As CEO, Rahavi leads the company's strategic direction and business operations. Her expertise in project management and client relations has been instrumental in the company's rapid growth and success."
    },
    {
      name: "Sunmathi Loganathan",
      role: "Director of Administration",
      image: "/lovable-uploads/a1575d0b-acc4-4816-bb8f-1364a92de3d0.png",
      description: "Sunmathi oversees all administrative functions and ensures smooth day-to-day operations. Her organizational skills and attention to detail create an efficient work environment that supports the entire team."
    },
    {
      name: "Abirami Chandresh",
      role: "Director of Sales",
      image: "/lovable-uploads/812d4ed3-a0ad-47a9-85ea-2538bc286815.png",
      description: "With her exceptional interpersonal skills and market knowledge, Abirami spearheads the company's sales initiatives and client acquisition strategies, helping expand our reach across various industries."
    }
  ];

  // Updated team members with new photo for Salma Begam
  const teamMembers = [
    {
      name: "Vijaya Lakshmi",
      role: "Administrative Manager",
      image: "/lovable-uploads/a253b229-abe9-43d1-b593-6cf6be8c8b39.png",
      fallback: "VL"
    },
    {
      name: "Salma Begam",
      role: "Head - Project Development",
      image: "/lovable-uploads/54e1bb51-e1e8-453f-a167-f43abbd55318.png",
      fallback: "SB"
    },
    {
      name: "Saravanan",
      role: "Head - Business Development",
      image: "/lovable-uploads/cc501c88-63bf-4a11-aae4-f8d6cbd1eda9.png",
      fallback: "S"
    },
    {
      name: "Gokularajan",
      role: "Head UX & UI",
      image: "/lovable-uploads/7f5becdb-39fc-4c73-a4c2-844c33c1415e.png",
      fallback: "G"
    },
    {
      name: "Mohammed Asar",
      role: "Senior Software Engineer",
      image: "/lovable-uploads/ac1c1162-531f-481a-9997-1d3a5f4af32d.png",
      fallback: "MA",
      techStack: "Next.js, Node.js"
    },
    {
      name: "Manoj Kumar",
      role: "Senior Software Engineer",
      image: "/lovable-uploads/5798791b-24ba-4eb8-8324-0c4a95d6067f.png",
      fallback: "MK",
      techStack: "Next.js, Node.js"
    },
    {
      name: "Kansha",
      role: "Senior Software Engineer",
      image: "/lovable-uploads/ebb421f8-0e1e-43ab-9b6d-d4b5edf0dc5f.png",
      fallback: "K",
      techStack: "React.js, Next.js, Node.js, Python"
    },
    {
      name: "Sahul Hameed",
      role: "Senior Software Engineer",
      image: "/lovable-uploads/cef7be2c-2b34-488a-a72c-d20c1a517b68.png",
      fallback: "SH",
      techStack: "Next.js, Node.js"
    },
    {
      name: "Dinesh Kannan",
      role: "Senior Software Engineer",
      image: "/lovable-uploads/8e5a339c-5771-453a-b79b-042d31856f0d.png",
      fallback: "DK",
      techStack: "React, Next.js, Java, Spring Boot"
    },
    {
      name: "Sheik Abdullah",
      role: "Senior Software Engineer",
      image: "/lovable-uploads/296e9f90-b911-425f-8ccc-5922f7b0d177.png",
      fallback: "SA",
      techStack: "Next.js, PHP, Laravel"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-magizh-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-magizh-dark mb-6">
              Our <span className="text-magizh-blue">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              From our humble beginnings to becoming a leading IT services provider
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Journey Timeline */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-magizh-light"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-16 relative`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center bg-white rounded-full border-4 border-magizh-light w-12 h-12">
                    {item.icon}
                  </div>
                  <div className="md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-magizh-blue">
                      <div className="md:hidden flex items-center mb-3">
                        {item.icon}
                        <span className="ml-2 font-bold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        <span className="hidden md:inline-block mr-3 text-magizh-blue">{item.year}</span>
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Section - Modified for reduced size */}
      <section className="py-12 bg-magizh-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Leadership</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-6">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-magizh-dark mb-1">{leader.name}</h3>
                  <p className="text-magizh-blue font-medium text-sm mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-4">
                    {leader.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full h-7 w-7 p-0">
                        <div className="sr-only">LinkedIn</div>
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full h-7 w-7 p-0">
                        <div className="sr-only">Email</div>
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Members Section - Modified for reduced size */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Our Senior Team</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Meet the talented professionals who make up our diverse and skilled team, committed to delivering exceptional results for our clients.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300">
                {/* Card Header with Image */}
                <div className="aspect-square relative bg-gradient-to-br from-magizh-light to-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden w-full h-full items-center justify-center text-2xl font-bold bg-gradient-to-br from-magizh-blue/20 to-magizh-purple/20 text-magizh-blue"
                  >
                    {member.fallback}
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-4">
                  <h3 className="font-bold text-sm text-magizh-dark">{member.name}</h3>
                  <p className="text-magizh-blue font-medium text-xs">{member.role}</p>
                  
                  {/* Tech Stack with Logos */}
                  {member.techStack && (
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-1 mt-1">
                        {member.techStack.split(', ').map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="outline"
                            className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-magizh-light text-magizh-blue border-magizh-blue/20 hover:bg-magizh-blue/10 transition-colors"
                            style={{
                              animationDelay: `${i * 100}ms`,
                            }}
                          >
                            <TechLogo tech={tech} className="h-2.5 w-2.5 mr-1 text-magizh-blue" />
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Social Icons */}
                  <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="rounded-full p-0 h-6 w-6 flex items-center justify-center text-gray-500 hover:text-magizh-blue hover:bg-magizh-light/50">
                        <div className="sr-only">LinkedIn</div>
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full p-0 h-6 w-6 flex items-center justify-center text-gray-500 hover:text-magizh-blue hover:bg-magizh-light/50">
                        <div className="sr-only">Email</div>
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </Button>
                    </div>
                    <div className="text-[10px] text-gray-500">{member.techStack ? "Dev" : "Mgmt"}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Departments - Modified for reduced size */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Departments</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-magizh-light flex items-center justify-center mb-2">
                    {dept.icon}
                  </div>
                  <h3 className="text-sm font-bold">{dept.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action - No major size changes needed */}
      <section className="py-12 bg-magizh-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Let's collaborate to bring your digital vision to life with our experienced team and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services">
              <Button variant="secondary" size="lg" className="flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link to="/#contact">
              <Button variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-magizh-blue">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
