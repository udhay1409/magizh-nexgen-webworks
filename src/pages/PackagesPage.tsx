
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-magizh-blue/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-magizh-purple/5 rounded-full filter blur-3xl" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Development <span className="bg-gradient-to-r from-magizh-blue via-magizh-purple to-magizh-teal text-transparent bg-clip-text">Packages</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Choose the perfect package for your custom web and mobile application development needs. 
                All packages include modern design, robust functionality, and ongoing support.
              </p>
              <div className="bg-magizh-blue/10 rounded-lg p-4 inline-block">
                <p className="text-magizh-blue font-semibold">✨ Limited Time Offer: Save up to ₹50,000 on all packages!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className={`relative ${pkg.popular ? 'border-magizh-blue border-2 shadow-xl scale-105' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-magizh-blue text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-3 rounded-full ${pkg.popular ? 'bg-magizh-blue text-white' : 'bg-gray-100 text-magizh-blue'}`}>
                      {pkg.icon}
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-magizh-blue">
                        ₹{pkg.price.toLocaleString()}
                      </div>
                      <div className="text-lg text-gray-500 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Features Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery Time:</span>
                        <span className="font-semibold">{pkg.deliveryTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Revisions:</span>
                        <span className="font-semibold">{pkg.revisions}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-magizh-blue hover:bg-magizh-blue/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                      onClick={() => handlePayment(pkg)}
                    >
                      Choose This Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">
                Have specific requirements? Contact us for a personalized quote tailored to your unique needs.
              </p>
              <Button variant="outline" size="lg" className="border-magizh-blue text-magizh-blue hover:bg-magizh-blue hover:text-white">
                Request Custom Quote
              </Button>
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-center">What's Included in Every Package</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-magizh-blue/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Check className="h-8 w-8 text-magizh-blue" />
                  </div>
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Rigorous testing and quality checks</p>
                </div>
                <div className="text-center">
                  <div className="bg-magizh-blue/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-magizh-blue" />
                  </div>
                  <h4 className="font-semibold mb-2">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">On-time project completion</p>
                </div>
                <div className="text-center">
                  <div className="bg-magizh-blue/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Star className="h-8 w-8 text-magizh-blue" />
                  </div>
                  <h4 className="font-semibold mb-2">Premium Support</h4>
                  <p className="text-sm text-gray-600">Dedicated support team</p>
                </div>
                <div className="text-center">
                  <div className="bg-magizh-blue/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Crown className="h-8 w-8 text-magizh-blue" />
                  </div>
                  <h4 className="font-semibold mb-2">Modern Technology</h4>
                  <p className="text-sm text-gray-600">Latest frameworks and tools</p>
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
