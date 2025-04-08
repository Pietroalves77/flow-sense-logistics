
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Track Flow has completely transformed our delivery operations. We've cut costs by 25% and improved our on-time delivery rate to 98%.",
    author: "Maria Rodriguez",
    role: "Operations Manager",
    company: "Express Logistics",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote: "The real-time tracking and notifications have dramatically improved our customer satisfaction scores. Our clients love being able to see exactly where their deliveries are.",
    author: "David Chen",
    role: "CEO",
    company: "Rapid Delivery Co.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote: "As a small business, we needed an affordable solution that could grow with us. Track Flow has been perfect - easy to use yet powerful enough for all our needs.",
    author: "Sarah Johnson",
    role: "Owner",
    company: "Metro Couriers",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-trackflow-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-trackflow-teal bg-trackflow-teal/10 rounded-full">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by logistics professionals
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our customers are saying about Track Flow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-10 bg-white shadow-lg relative">
            <div className="absolute top-10 left-10 text-trackflow-teal opacity-20">
              <Quote className="h-20 w-20" />
            </div>

            <div className="relative z-10">
              <p className="text-xl sm:text-2xl text-gray-700 italic mb-8 relative z-10">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  <p className="text-trackflow-blue font-medium">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-trackflow-blue" : "w-2.5 bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
