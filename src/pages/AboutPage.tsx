
import { ArrowRight, Award, Building, Calendar, Flag, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    { name: "UX & UI Design", icon: <Star className="text-magizh-pink" /> },
    { name: "Development Teams", icon: <Building className="text-magizh-blue" /> },
    { name: "Quality Assurance", icon: <Award className="text-magizh-purple" /> },
    { name: "Cloud Operations", icon: <MapPin className="text-magizh-teal" /> }
  ];

  const leadership = [
    {
      name: "Udhayaseelan Renganathan",
      role: "Founder",
      image: "/lovable-uploads/b7ee228d-3fa3-4460-a6d5-409f1948cb9e.png"
    },
    {
      name: "Rahavi Udhayaseelan",
      role: "CEO & Managing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
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
      <section className="py-16 bg-white">
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
      
      {/* Leadership Section */}
      <section className="py-16 bg-magizh-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 h-60 sm:h-auto overflow-hidden bg-gray-100">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="sm:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-magizh-dark mb-2">{leader.name}</h3>
                    <p className="text-magizh-blue font-medium mb-4">{leader.role}</p>
                    <p className="text-gray-600">
                      Leading Magizh NexGen Technologies with vision and expertise.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full">
                          <div className="sr-only">LinkedIn</div>
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <div className="sr-only">Email</div>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Departments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-magizh-light flex items-center justify-center mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{dept.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-magizh-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
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
