
import { 
  MapPin, 
  Bell, 
  Wifi, 
  Code, 
  History, 
  Map,
  Server,
  Compass,
  BarChart4,
  Users,
  CloudOff,
  CloudCog
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart4 className="h-10 w-10 text-trackflow-blue" />,
      title: "Intelligent Dashboard",
      description: "Centralized overview of all logistics operations with customizable KPIs and real-time updates."
    },
    {
      icon: <Bell className="h-10 w-10 text-trackflow-teal" />,
      title: "Automatic Notifications",
      description: "Stay informed with instant alerts for delays, completions, and other critical events."
    },
    {
      icon: <CloudOff className="h-10 w-10 text-trackflow-orange" />,
      title: "Offline Mode",
      description: "Delivery drivers can continue working without interruption even when connectivity is lost."
    },
    {
      icon: <Code className="h-10 w-10 text-trackflow-blue" />,
      title: "API Integration",
      description: "Seamlessly connect with your existing systems and third-party services."
    },
    {
      icon: <History className="h-10 w-10 text-trackflow-teal" />,
      title: "Route History",
      description: "Comprehensive records of all deliveries for auditing and performance analysis."
    },
    {
      icon: <Map className="h-10 w-10 text-trackflow-orange" />,
      title: "Real-time Visualization",
      description: "Interactive maps showing vehicle locations, delivery status, and traffic conditions."
    },
    {
      icon: <Compass className="h-10 w-10 text-trackflow-blue" />,
      title: "AI Route Optimization",
      description: "Smart algorithms that calculate the most efficient routes based on multiple factors."
    },
    {
      icon: <CloudCog className="h-10 w-10 text-trackflow-teal" />,
      title: "Cloud-based Platform",
      description: "Access your logistics data from anywhere, with automatic backups and updates."
    },
    {
      icon: <Users className="h-10 w-10 text-trackflow-orange" />,
      title: "Team Management",
      description: "Assign tasks, monitor performance, and manage your entire delivery team."
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-trackflow-teal bg-trackflow-teal/10 rounded-full">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to manage logistics
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Track Flow combines powerful functionality with ease of use to create the perfect logistics solution for businesses of any size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="p-6">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
