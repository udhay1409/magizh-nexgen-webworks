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
import { Briefcase, Calendar, CheckCircle, ClipboardList, Mail, User, Building, Phone, DollarSign, MessageSquare } from "lucide-react";

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
      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append('access_key', '558c46b3-9154-49bc-8215-420a1f9729c9');
      formData.append('from_name', 'Magizh NexGen Technologies');
      formData.append('from_email', 'sales@mntfuture.com');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone || '');
      formData.append('company', data.company || '');
      formData.append('service', getServiceLabel(data.service));
      formData.append('budget', getBudgetLabel(data.budget));
      formData.append('message', data.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast({
          title: 'Quote Request Received!',
          description: "Your request has been sent to our sales team, we'll contact you shortly.",
        });
        setIsSuccess(true);
        setTimeout(() => {
          form.reset();
          setIsSuccess(false);
          onOpenChange(false);
        }, 3000);
      } else {
        toast({
          title: 'Something went wrong!',
          description: 'Please try again later or contact us directly.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Something went wrong!',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
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
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto z-50 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <div className="rounded-full bg-gradient-to-r from-green-100 to-emerald-100 p-4 mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-magizh-blue to-magizh-purple text-transparent bg-clip-text">
              Thank You!
            </h2>
            <p className="text-center text-gray-600 mb-4 text-lg">
              Your quote request has been successfully submitted.
            </p>
            <p className="text-center text-gray-500 text-sm">
              Our team will contact you shortly to discuss your project.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center pb-6 border-b border-gray-100">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-magizh-blue to-magizh-purple rounded-full flex items-center justify-center mb-4">
                <ClipboardList className="h-8 w-8 text-white" />
              </div>
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-magizh-blue to-magizh-purple text-transparent bg-clip-text">
                Request a Quote
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-lg mt-2">
                Tell us about your project and we'll provide a customized quote within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-6">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <User className="h-5 w-5 text-magizh-blue" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Full Name*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-gray-200 focus:border-magizh-blue focus:ring-2 focus:ring-magizh-blue/20 transition-all duration-200"
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
                          <FormLabel className="text-gray-700 font-medium">Email Address*</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              {...field} 
                              className="border-gray-200 focus:border-magizh-blue focus:ring-2 focus:ring-magizh-blue/20 transition-all duration-200"
                            />
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
                          <FormLabel className="text-gray-700 font-medium flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-gray-200 focus:border-magizh-blue focus:ring-2 focus:ring-magizh-blue/20 transition-all duration-200"
                            />
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
                          <FormLabel className="text-gray-700 font-medium flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            Company Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-gray-200 focus:border-magizh-blue focus:ring-2 focus:ring-magizh-blue/20 transition-all duration-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-magizh-purple" />
                    Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Service Required*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-200 focus:border-magizh-purple focus:ring-2 focus:ring-magizh-purple/20 transition-all duration-200">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg">
                              <SelectItem value="web_development">🌐 Web Development</SelectItem>
                              <SelectItem value="mobile_app">📱 Mobile App Development</SelectItem>
                              <SelectItem value="ui_ux">🎨 UI/UX Design</SelectItem>
                              <SelectItem value="cloud">☁️ Cloud Solutions</SelectItem>
                              <SelectItem value="consulting">💼 IT Consulting</SelectItem>
                              <SelectItem value="custom">⚙️ Custom Software</SelectItem>
                              <SelectItem value="other">🔧 Other</SelectItem>
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
                          <FormLabel className="text-gray-700 font-medium flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            Budget Range*
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-200 focus:border-magizh-teal focus:ring-2 focus:ring-magizh-teal/20 transition-all duration-200">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg">
                              <SelectItem value="less_5k">💰 Less than $5,000</SelectItem>
                              <SelectItem value="5k_10k">💰💰 $5,000 - $10,000</SelectItem>
                              <SelectItem value="10k_25k">💰💰💰 $10,000 - $25,000</SelectItem>
                              <SelectItem value="25k_50k">💎 $25,000 - $50,000</SelectItem>
                              <SelectItem value="50k_plus">💎💎 $50,000+</SelectItem>
                              <SelectItem value="not_sure">🤔 Not sure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Project Description */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-magizh-teal" />
                          Tell us about your project*
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-[120px] border-gray-200 focus:border-magizh-teal focus:ring-2 focus:ring-magizh-teal/20 transition-all duration-200 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* What happens next section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mt-8 border border-blue-100">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-magizh-blue rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-magizh-blue text-lg mb-2">What happens next?</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-magizh-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-magizh-blue">1</span>
                          </div>
                          <p className="text-gray-700 text-sm">Your request will be sent to <strong>sales@mntfuture.com</strong></p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-magizh-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-magizh-purple">2</span>
                          </div>
                          <p className="text-gray-700 text-sm">Our team will review your requirements within <strong>24 hours</strong></p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-magizh-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-magizh-teal">3</span>
                          </div>
                          <p className="text-gray-700 text-sm">We'll schedule a <strong>consultation call</strong> to discuss details</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-magizh-pink/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-magizh-pink">4</span>
                          </div>
                          <p className="text-gray-700 text-sm">You'll receive a <strong>custom proposal</strong> with timeline and pricing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter className="mt-8 pt-6 border-t border-gray-100">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="px-6 py-3 border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-magizh-blue to-magizh-purple hover:from-magizh-blue/90 hover:to-magizh-purple/90 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <ClipboardList className="ml-2 h-4 w-4" />
                      </>
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
