
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Package } from "lucide-react";
import DeliveryList from "@/components/dashboard/DeliveryList";

const DeliveriesPage = () => {
  return (
    <>
      <Helmet>
        <title>Deliveries | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Entregas</h1>
              <p className="text-muted-foreground">
                Gerencie todas as suas entregas em um só lugar
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <DeliveryList />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default DeliveriesPage;
