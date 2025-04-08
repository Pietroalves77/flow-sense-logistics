
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/dashboard/StatCard";
import DeliveryList from "@/components/dashboard/DeliveryList";
import MapView from "@/components/dashboard/MapView";
import DeliveryChart from "@/components/dashboard/DeliveryChart";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import { BarChart3, Calendar, Clock, MapPin, Package, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's an overview of your logistics operations.
              </p>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <Button>
                <Package className="mr-2 h-4 w-4" /> Add Delivery
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" /> Apr 8, 2025
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Total Deliveries"
              value="128"
              icon={<Package className="h-5 w-5" />}
              change={12}
              trend="up"
              description="This week"
            />
            <StatCard
              title="On-time Rate"
              value="94.2%"
              icon={<Clock className="h-5 w-5" />}
              change={3.5}
              trend="up"
              description="This week"
            />
            <StatCard
              title="Active Drivers"
              value="18"
              icon={<Users className="h-5 w-5" />}
              change={0}
              trend="neutral"
              description="Currently active"
            />
            <StatCard
              title="Avg. Delivery Time"
              value="42 min"
              icon={<Truck className="h-5 w-5" />}
              change={-5}
              trend="down"
              description="Time improved"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <MapView />
            <DeliveryChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DeliveryList />
            </div>
            <div>
              <NotificationPanel />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Dashboard;
