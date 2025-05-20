
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize the form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Updated to match the style of other pages
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-magizh-blue/5 to-magizh-purple/5 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-magizh-dark">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-magizh-dark">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="border-gray-200 focus:border-magizh-blue focus:ring-magizh-blue/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-magizh-dark">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="border-gray-200 focus:border-magizh-blue focus:ring-magizh-blue/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-magizh-dark">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              className="border-gray-200 focus:border-magizh-blue focus:ring-magizh-blue/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-magizh-dark">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            rows={4}
                            className="border-gray-200 focus:border-magizh-blue focus:ring-magizh-blue/20 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-magizh-blue hover:bg-magizh-blue/80 text-white font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="h-full flex flex-col justify-between">
              <div className="bg-gradient-to-br from-magizh-blue/5 to-magizh-purple/5 p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-magizh-dark">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  Have questions or ready to discuss your project? 
                  Reach out to us through any of the following channels.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="p-3 bg-magizh-blue/10 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-magizh-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-magizh-dark">Email Us</h4>
                      <p className="text-gray-600 hover:text-magizh-blue transition-colors">
                        <a href="mailto:info@mntfuture.com">info@mntfuture.com</a>
                      </p>
                      <p className="text-gray-600 hover:text-magizh-blue transition-colors">
                        <a href="mailto:support@mntfuture.com">support@mntfuture.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-magizh-purple/10 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-magizh-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-magizh-dark">Call Us</h4>
                      <p className="text-gray-600 hover:text-magizh-blue transition-colors">
                        <a href="tel:+918925845077">+91 8925845077</a>
                      </p>
                      <p className="text-gray-600 hover:text-magizh-blue transition-colors">
                        <a href="tel:+917402075266">+91 7402075266</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-magizh-teal/10 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-magizh-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-magizh-dark">Visit Us</h4>
                      <p className="text-gray-600">
                        Magizh NexGen Technologies,<br />
                        3/501, Subash Street, Muneeswarar Nagar,<br />
                        Iyer Bungalow, Madurai, Tamil Nadu, 625014
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-magizh-blue/5 to-magizh-purple/5 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-semibold text-lg text-magizh-dark">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#"
                      aria-label="Facebook"
                      className="h-10 w-10 rounded-full bg-magizh-blue/10 flex items-center justify-center hover:bg-magizh-blue text-magizh-blue hover:text-white transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="#"
                      aria-label="Twitter"
                      className="h-10 w-10 rounded-full bg-magizh-purple/10 flex items-center justify-center hover:bg-magizh-purple text-magizh-purple hover:text-white transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="#"
                      aria-label="LinkedIn"
                      className="h-10 w-10 rounded-full bg-magizh-blue/10 flex items-center justify-center hover:bg-magizh-blue text-magizh-blue hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="#"
                      aria-label="Instagram"
                      className="h-10 w-10 rounded-full bg-magizh-purple/10 flex items-center justify-center hover:bg-magizh-purple text-magizh-purple hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold mb-3 text-magizh-dark">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Monday - Friday:</span>
                      <span className="text-magizh-dark font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Saturday:</span>
                      <span className="text-magizh-dark font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sunday:</span>
                      <span className="text-magizh-dark font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-magizh-dark">Find Us</h3>
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.980720831892!2d78.12935247409284!3d9.930498589638424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5493c6dad5f%3A0x82b9ac02c9b00c8c!2sMagizh%20NexGen%20Technologies!5e0!3m2!1sen!2sin!4v1716372947844!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Magizh NexGen Technologies Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
