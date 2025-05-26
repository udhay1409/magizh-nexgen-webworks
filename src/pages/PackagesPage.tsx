
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown, Bot, Cpu, Circuit } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PackagesPage = () => {
  const { toast } = useToast();
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  useEffect(() => {
    document.title = "Development Packages | Magizh NexGen";
    
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setIsRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const packages = [
    {
      id: 'starter',
      name: 'Starter Package',
      price: 25000,
      originalPrice: 35000,
      icon: <Star className="h-8 w-8" />,
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Web Application',
        'Up to 5 Pages/Screens',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Mobile-Friendly Design',
        '3 Months Free Support',
        'SSL Certificate Setup',
        'Basic Analytics Integration'
      ],
      deliveryTime: '2-3 weeks',
      revisions: '3 revisions included'
    },
    {
      id: 'professional',
      name: 'Professional Package',
      price: 75000,
      originalPrice: 95000,
      icon: <Zap className="h-8 w-8" />,
      description: 'Ideal for growing businesses',
      features: [
        'Custom Web + Mobile App',
        'Up to 15 Pages/Screens',
        'Advanced SEO Optimization',
        'Payment Gateway Integration',
        'User Authentication System',
        'Admin Panel Dashboard',
        '6 Months Free Support',
        'Database Integration',
        'API Development',
        'Push Notifications',
        'Social Media Integration'
      ],
      deliveryTime: '4-6 weeks',
      revisions: '5 revisions included',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      price: 150000,
      originalPrice: 200000,
      icon: <Crown className="h-8 w-8" />,
      description: 'Complete solution for large businesses',
      features: [
        'Custom Web + Mobile + Desktop App',
        'Unlimited Pages/Screens',
        'Advanced SEO & Performance',
        'Multiple Payment Gateways',
        'Advanced User Management',
        'Multi-level Admin System',
        '12 Months Free Support',
        'Cloud Infrastructure Setup',
        'Advanced Analytics',
        'Third-party Integrations',
        'Custom API Development',
        'Real-time Features',
        'Multi-language Support',
        'Advanced Security Features'
      ],
      deliveryTime: '8-12 weeks',
      revisions: 'Unlimited revisions'
    }
  ];

  const handlePayment = (packageData: any) => {
    if (!isRazorpayLoaded) {
      toast({
        title: "Payment System Loading",
        description: "Please wait a moment and try again.",
        variant: "destructive"
      });
      return;
    }

    const options = {
      key: 'rzp_test_1234567890', // Replace with your Razorpay key
      amount: packageData.price * 100, // Amount in paise
      currency: 'INR',
      name: 'Magizh NexGen Technologies',
      description: `${packageData.name} - Custom Development`,
      image: '/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png',
      handler: function (response: any) {
        toast({
          title: "Payment Successful!",
          description: `Payment ID: ${response.razorpay_payment_id}. We'll contact you within 24 hours to begin your project.`
        });
        console.log('Payment successful:', response);
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        package: packageData.name,
        package_id: packageData.id
      },
      theme: {
        color: '#3B82F6'
      },
      modal: {
        ondismiss: function() {
          toast({
            title: "Payment Cancelled",
            description: "You can try again anytime. Contact us for any questions."
          });
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-tech">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero Section with tech aesthetics */}
        <section className="pt-32 pb-16 neural-network relative overflow-hidden">
          <div className="absolute inset-0 circuit-lines opacity-10" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Data stream animations */}
          <div className="absolute top-1/4 left-0 w-full h-px data-stream" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-px data-stream" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Tech badge */}
              <div className="mb-6">
                <span className="inline-block py-3 px-6 rounded-full glass-effect text-blue-400 text-sm font-semibold border border-blue-500/30 tech-glow">
                  <Bot className="inline w-4 h-4 mr-2" />
                  AI-Powered Development Packages
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Development <span className="holographic text-transparent bg-clip-text">Packages</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Choose the perfect package for your custom web and mobile application development needs. 
                All packages include <span className="text-blue-400 font-semibold">modern AI integration</span>, 
                robust functionality, and ongoing support.
              </p>
              <div className="glass-dark rounded-xl p-6 inline-block tech-border">
                <p className="text-blue-400 font-semibold text-lg">
                  ⚡ Limited Time Offer: Save up to ₹50,000 on all packages!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Packages Section */}
        <section className="py-16 bg-gradient-neural relative">
          <div className="absolute inset-0 circuit-lines opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className={`relative overflow-hidden ${pkg.popular ? 'tech-border scale-105 tech-glow' : 'glass-dark border-gray-700/50'} hover:scale-105 transition-all duration-300 group`}>
                  {/* Circuit pattern overlay */}
                  <div className="absolute inset-0 circuit-lines opacity-5 group-hover:opacity-10 transition-opacity" />
                  
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="holographic text-white px-6 py-2 rounded-full text-sm font-semibold tech-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center relative z-10">
                    <div className={`mx-auto mb-4 p-4 rounded-full ${pkg.popular ? 'holographic' : 'bg-gray-700/50'} tech-glow`}>
                      <div className="text-white">
                        {pkg.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                    <CardDescription className="text-gray-300">{pkg.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-blue-400 cyber-text">
                        ₹{pkg.price.toLocaleString()}
                      </div>
                      <div className="text-lg text-gray-500 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-400 font-semibold">
                        Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Features Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-700/50 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Delivery Time:</span>
                        <span className="font-semibold text-white">{pkg.deliveryTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Revisions:</span>
                        <span className="font-semibold text-white">{pkg.revisions}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full ${pkg.popular ? 'holographic' : 'bg-gray-700 hover:bg-gray-600'} text-white tech-glow transition-all duration-300 hover:scale-105`}
                      onClick={() => handlePayment(pkg)}
                    >
                      Choose This Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Enhanced custom solution section */}
            <div className="mt-16 text-center">
              <div className="glass-dark rounded-2xl p-8 tech-border relative overflow-hidden">
                <div className="absolute inset-0 circuit-lines opacity-5" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Have specific requirements? Contact us for a personalized quote tailored to your unique needs.
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 tech-glow transition-all duration-300 hover:scale-105"
                  >
                    <Cpu className="mr-2 h-5 w-5" />
                    Request Custom Quote
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Enhanced included features section */}
            <div className="mt-12 glass-dark rounded-2xl p-8 tech-border relative overflow-hidden">
              <div className="absolute inset-0 circuit-lines opacity-5" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">What's Included in Every Package</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center group">
                    <div className="bg-blue-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-500/30 transition-all tech-border">
                      <Check className="h-8 w-8 text-blue-400" />
                    </div>
                    <h4 className="font-semibold mb-2 text-white">Quality Assurance</h4>
                    <p className="text-sm text-gray-300">Rigorous testing and quality checks</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-purple-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-500/30 transition-all tech-border">
                      <Zap className="h-8 w-8 text-purple-400" />
                    </div>
                    <h4 className="font-semibold mb-2 text-white">Fast Delivery</h4>
                    <p className="text-sm text-gray-300">On-time project completion</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-teal-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-teal-500/30 transition-all tech-border">
                      <Star className="h-8 w-8 text-teal-400" />
                    </div>
                    <h4 className="font-semibold mb-2 text-white">Premium Support</h4>
                    <p className="text-sm text-gray-300">Dedicated support team</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-pink-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-pink-500/30 transition-all tech-border">
                      <Bot className="h-8 w-8 text-pink-400" />
                    </div>
                    <h4 className="font-semibold mb-2 text-white">AI Technology</h4>
                    <p className="text-sm text-gray-300">Latest AI frameworks and tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PackagesPage;
