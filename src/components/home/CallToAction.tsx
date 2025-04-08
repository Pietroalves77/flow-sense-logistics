
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Building2, HeadSet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const { toast } = useToast();
  
  const benefits = [
    "Free 14-day trial, no credit card required",
    "Onboarding support included",
    "Reduce delivery costs by up to 30%",
    "Increase customer satisfaction",
    "Start with a small team and scale as you grow"
  ];

  const handleTrialStart = () => {
    toast({
      title: "Trial started!",
      description: "Welcome to Track Flow. Your 14-day trial has begun.",
      duration: 5000,
    });
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-trackflow-blue overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to transform your logistics operations?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-lg">
                Join thousands of companies that are saving time, reducing costs, and delivering better customer experiences with Track Flow.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white hover:bg-gray-100 text-trackflow-blue font-medium px-8 py-6 rounded-md text-lg" 
                  asChild
                  onClick={handleTrialStart}
                >
                  <Link to="/signup">
                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 hover:text-white font-medium px-8 py-6 rounded-md text-lg" 
                  asChild
                >
                  <Link to="/contact">
                    Contact Sales <Building2 className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="/lovable-uploads/96203ccb-4ff4-4404-b83e-3557281ef644.png" 
                alt="Warehouse logistics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-trackflow-blue/20 mix-blend-multiply"></div>
              
              <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-pulse-slow">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-500/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Route optimized!</p>
                    <p className="text-sm text-gray-500">AI saved 28 minutes on today's deliveries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
