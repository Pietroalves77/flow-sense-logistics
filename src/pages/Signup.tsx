
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    password: "",
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Account created!",
        description: "Your 14-day trial has been activated. Welcome to Track Flow!",
        duration: 5000,
      });
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1500);
  };

  const benefits = [
    "Real-time tracking and analytics",
    "Smart route optimization",
    "Team collaboration tools",
    "Customer notification system",
    "Mobile app for drivers"
  ];

  return (
    <>
      <Helmet>
        <title>Start Your Free Trial | Track Flow</title>
      </Helmet>
      <MainLayout>
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-3xl font-bold mb-4">Start your 14-day free trial</h1>
                <p className="text-muted-foreground mb-8">
                  Get started with TrackFlow today and see how our platform can transform your logistics operations.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input 
                      id="companyName" 
                      name="companyName"
                      placeholder="Your company name" 
                      value={formData.companyName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      name="fullName"
                      placeholder="Your full name" 
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="you@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      name="password"
                      type="password" 
                      placeholder="Create a secure password" 
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeTerms}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to Track Flow's <a href="/terms" className="text-trackflow-blue hover:underline">Terms of Service</a> and <a href="/privacy" className="text-trackflow-blue hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 text-lg" 
                    disabled={isSubmitting || !formData.agreeTerms}
                  >
                    {isSubmitting ? "Creating account..." : "Start Free Trial"} 
                    {!isSubmitting && <ArrowRight className="ml-2" />}
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground">
                    Already have an account? <a href="/login" className="text-trackflow-blue hover:underline">Log in</a>
                  </p>
                </form>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">What you'll get:</h2>
                
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-trackflow-blue mr-3 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white p-6 rounded-lg border mb-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Customer" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Logistics Manager, XYZ Logistics</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">
                    "Track Flow has completely transformed how we manage our deliveries. We've seen a 25% reduction in fuel costs and our customers love the real-time tracking."
                  </p>
                </div>
                
                <div className="bg-trackflow-blue/10 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>No credit card required</strong> to start your 14-day trial. You can cancel anytime during your trial period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Signup;
