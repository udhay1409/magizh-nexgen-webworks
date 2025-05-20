
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Briefcase, Calendar, CheckCircle, ClipboardList, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }).optional(),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  message: z.string().min(10, { message: "Please provide more details about your project" }),
});

type FormValues = z.infer<typeof formSchema>;

interface GetQuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetQuoteForm = ({ open, onOpenChange }: GetQuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create email content
      const emailContent = `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Company: ${data.company || 'Not provided'}
        Service: ${getServiceLabel(data.service)}
        Budget: ${getBudgetLabel(data.budget)}
        Message: ${data.message}
      `;
      
      // Using EmailJS to send email
      // You would typically set up EmailJS or another email service
      const emailData = {
        service_id: "your_service_id", // Replace with actual service ID
        template_id: "your_template_id", // Replace with actual template ID
        user_id: "your_user_id", // Replace with actual user ID
        template_params: {
          to_email: "sales@mntfuture.com",
          from_name: data.name,
          from_email: data.email,
          message: emailContent,
          subject: `Quote Request from ${data.name} - ${getServiceLabel(data.service)}`,
        }
      };

      // Log for debugging
      console.log("Sending form data to email:", emailData);
      
      // In production, you would use an actual email service integration
      // For now, we're simulating success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Quote Request Received!",
        description: "Your request has been sent to our sales team, we'll contact you shortly.",
      });
      
      setIsSuccess(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper functions to get readable labels for form values
  const getServiceLabel = (value: string) => {
    const services: Record<string, string> = {
      web_development: "Web Development",
      mobile_app: "Mobile App Development",
      ui_ux: "UI/UX Design",
      cloud: "Cloud Solutions",
      consulting: "IT Consulting",
      custom: "Custom Software",
      other: "Other"
    };
    return services[value] || value;
  };
  
  const getBudgetLabel = (value: string) => {
    const budgets: Record<string, string> = {
      less_5k: "Less than $5,000",
      "5k_10k": "$5,000 - $10,000",
      "10k_25k": "$10,000 - $25,000",
      "25k_50k": "$25,000 - $50,000",
      "50k_plus": "$50,000+",
      "not_sure": "Not sure"
    };
    return budgets[value] || value;
  };

  const handleClose = () => {
    if (!isSubmitting) {
      form.reset();
      setIsSuccess(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose} modal={true}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto z-50">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Thank You!</h2>
            <p className="text-center text-gray-600 mb-4">
              Your quote request has been successfully submitted. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
              <DialogDescription>
                Fill out the form below and our team will get back to you with a customized quote.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
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
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="web_development">Web Development</SelectItem>
                            <SelectItem value="mobile_app">Mobile App Development</SelectItem>
                            <SelectItem value="ui_ux">UI/UX Design</SelectItem>
                            <SelectItem value="cloud">Cloud Solutions</SelectItem>
                            <SelectItem value="consulting">IT Consulting</SelectItem>
                            <SelectItem value="custom">Custom Software</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="less_5k">Less than $5,000</SelectItem>
                            <SelectItem value="5k_10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k_25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k_50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k_plus">$50,000+</SelectItem>
                            <SelectItem value="not_sure">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
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
                      <FormLabel>Project Details*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your project and requirements"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-blue-50 p-4 rounded-lg mt-6 flex gap-3">
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5 text-magizh-purple" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-magizh-purple">Your request will be sent to:</p>
                    <p className="text-gray-600 mt-1">sales@mntfuture.com</p>
                    <p className="mt-2 font-medium text-magizh-purple">What happens next?</p>
                    <ol className="list-decimal ml-5 mt-1 text-gray-600 space-y-1">
                      <li>Our sales team will review your requirements</li>
                      <li>We'll contact you within 24 hours</li>
                      <li>We'll schedule a detailed consultation call</li>
                      <li>You'll receive a custom proposal</li>
                    </ol>
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-magizh-purple hover:bg-magizh-purple/80 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>Submit Request</>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetQuoteForm;
