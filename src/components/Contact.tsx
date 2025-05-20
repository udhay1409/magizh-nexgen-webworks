
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

  return (
    <section id="contact" className="section-padding bg-magizh-blue text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-magizh-teal uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements. Our team is ready 
            to help bring your vision to life with innovative technology solutions.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full"
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            rows={4}
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-magizh-blue hover:bg-magizh-purple text-white"
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
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-gray-200 mb-8">
                  Have questions or ready to discuss your project? 
                  Reach out to us through any of the following channels.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-magizh-teal shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-gray-200">info@mntfuture.com</p>
                      <p className="text-gray-200">support@mntfuture.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-magizh-teal shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-gray-200">+91 8925845077</p>
                      <p className="text-gray-200">+91 7402075266</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-magizh-teal shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="font-semibold">Visit Us</h4>
                      <p className="text-gray-200">
                        Magizh NexGen Technologies,<br />
                        3/501, Subash Street, Muneeswarar Nagar,<br />
                        Iyer Bungalow, Madurai, Tamil Nadu, 625014
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#"
                    aria-label="Facebook"
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-teal transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#"
                    aria-label="Twitter"
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-teal transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#"
                    aria-label="LinkedIn"
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-teal transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#"
                    aria-label="Instagram"
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-magizh-teal transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="mt-12 bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Find Us</h3>
          <div className="h-96 w-full rounded-lg overflow-hidden">
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
