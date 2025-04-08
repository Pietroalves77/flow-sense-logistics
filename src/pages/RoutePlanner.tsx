
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Compass } from "lucide-react";

const RoutePlanner = () => {
  return (
    <>
      <Helmet>
        <title>Route Planner | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Planejador de Rotas</h1>
              <p className="text-muted-foreground">
                Otimize suas rotas de entrega para máxima eficiência
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 h-[calc(100vh-250px)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <Compass className="h-16 w-16 mx-auto text-gray-300" />
              <h3 className="text-xl font-medium">Planejamento de Rotas</h3>
              <p className="text-muted-foreground max-w-md">
                Utilize nosso algoritmo de otimização para planejar as rotas mais eficientes para suas entregas.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default RoutePlanner;
