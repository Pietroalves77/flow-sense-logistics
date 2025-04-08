
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Users } from "lucide-react";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Team | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Equipe</h1>
              <p className="text-muted-foreground">
                Gerencie motoristas, despachantes e administradores
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 h-[calc(100vh-250px)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <Users className="h-16 w-16 mx-auto text-gray-300" />
              <h3 className="text-xl font-medium">Gerenciamento de Equipe</h3>
              <p className="text-muted-foreground max-w-md">
                Adicione, edite e gerencie todos os membros da sua equipe logística, definindo funções e permissões.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Team;
