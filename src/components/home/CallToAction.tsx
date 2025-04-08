
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CallToAction = () => {
  const benefits = [
    "Free 14-day trial, no credit card required",
    "Onboarding support included",
    "Reduce delivery costs by up to 30%",
    "Increase customer satisfaction",
    "Start with a small team and scale as you grow"
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl gradient-bg overflow-hidden shadow-xl">
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
                <Button className="bg-white hover:bg-gray-100 text-trackflow-blue font-medium px-8 py-6 rounded-md text-lg" asChild>
                  <Link to="/signup">
                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-md text-lg" asChild>
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1573030889348-c6b0f8b15e40?q=80&w=1000&auto=format&fit=crop" 
                alt="Logistics management" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-trackflow-blue/30 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
