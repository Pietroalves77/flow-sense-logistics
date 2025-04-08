
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, Clock, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-trackflow-blue/5 to-trackflow-teal/5" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col space-y-8 animate-slide-up">
            <div>
              <span className="inline-flex items-center rounded-full bg-trackflow-teal/10 px-3 py-1 text-sm font-medium text-trackflow-teal">
                Introducing Track Flow
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-trackflow-blue">Smart logistics</span>
                <span className="text-trackflow-teal"> for everyone</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 md:text-xl">
                Optimize deliveries, reduce costs, and make better decisions with our 
                AI-powered logistics platform. Real-time tracking, intelligent route 
                planning, and powerful analytics in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-trackflow-blue hover:bg-trackflow-darkblue text-white font-medium px-8 py-6 rounded-md text-lg w-full sm:w-auto" asChild>
                <Link to="/signup">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-trackflow-blue text-trackflow-blue hover:bg-trackflow-blue/5 font-medium px-8 py-6 rounded-md text-lg w-full sm:w-auto" asChild>
                <Link to="/demo">
                  Book a Demo <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-trackflow-blue/10 p-3 rounded-full mb-2">
                  <Truck className="h-6 w-6 text-trackflow-blue" />
                </div>
                <p className="text-sm font-medium">Real-time Tracking</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-trackflow-teal/10 p-3 rounded-full mb-2">
                  <Package className="h-6 w-6 text-trackflow-teal" />
                </div>
                <p className="text-sm font-medium">Smart Delivery</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-trackflow-orange/10 p-3 rounded-full mb-2">
                  <Clock className="h-6 w-6 text-trackflow-orange" />
                </div>
                <p className="text-sm font-medium">Time Savings</p>
              </div>
            </div>
          </div>

          <div className="relative animate-zoom-in">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                alt="Track Flow Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-pulse-slow">
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
    </section>
  );
};

export default Hero;
