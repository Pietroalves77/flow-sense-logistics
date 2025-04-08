
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { BarChart3 } from "lucide-react";
import DeliveryChart from "@/components/dashboard/DeliveryChart";

const Analytics = () => {
  return (
    <>
      <Helmet>
        <title>Analytics | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Análises</h1>
              <p className="text-muted-foreground">
                Visualize o desempenho da sua operação logística
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 mb-6">
            <DeliveryChart />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Métricas de Entrega</h3>
              <div className="h-64 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-gray-300" />
              </div>
            </div>
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Performance dos Motoristas</h3>
              <div className="h-64 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Analytics;
