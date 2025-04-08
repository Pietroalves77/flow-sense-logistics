
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { MapPin } from "lucide-react";

const LiveMap = () => {
  return (
    <>
      <Helmet>
        <title>Live Map | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Live Map</h1>
              <p className="text-muted-foreground">
                Visualize todas as entregas e veículos em tempo real
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 h-[calc(100vh-250px)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="h-16 w-16 mx-auto text-gray-300" />
              <h3 className="text-xl font-medium">Mapa em tempo real</h3>
              <p className="text-muted-foreground max-w-md">
                O mapa interativo mostrará a localização atual de todos os veículos e entregas pendentes.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default LiveMap;
