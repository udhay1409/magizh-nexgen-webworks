
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Updated this section with gradient background to match other pages */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-magizh-blue/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-magizh-purple/5 rounded-full filter blur-3xl" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In <span className="bg-gradient-to-r from-magizh-blue via-magizh-purple to-magizh-teal text-transparent bg-clip-text">Touch</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or ready to start your project? Contact us today and let's discuss how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
