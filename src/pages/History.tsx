
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { History as HistoryIcon } from "lucide-react";

const History = () => {
  return (
    <>
      <Helmet>
        <title>History | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Histórico</h1>
              <p className="text-muted-foreground">
                Consulte o histórico completo de entregas e operações
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 h-[calc(100vh-250px)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <HistoryIcon className="h-16 w-16 mx-auto text-gray-300" />
              <h3 className="text-xl font-medium">Histórico de Entregas</h3>
              <p className="text-muted-foreground max-w-md">
                Acesse o histórico completo de todas as suas entregas realizadas, com filtros por data, status e motorista.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default History;
