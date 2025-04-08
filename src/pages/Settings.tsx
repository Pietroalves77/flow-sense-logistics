
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Settings | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Configurações</h1>
              <p className="text-muted-foreground">
                Personalize as configurações da sua conta e aplicação
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 h-[calc(100vh-250px)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <SettingsIcon className="h-16 w-16 mx-auto text-gray-300" />
              <h3 className="text-xl font-medium">Configurações do Sistema</h3>
              <p className="text-muted-foreground max-w-md">
                Ajuste todas as configurações da sua conta, defina preferências e personalize sua experiência no TrackFlow.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Settings;
