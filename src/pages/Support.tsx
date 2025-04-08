
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { HelpCircle } from "lucide-react";

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Help & Support | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Ajuda & Suporte</h1>
              <p className="text-muted-foreground">
                Encontre ajuda e entre em contato com nossa equipe de suporte
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 h-[calc(100vh-250px)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <HelpCircle className="h-16 w-16 mx-auto text-gray-300" />
              <h3 className="text-xl font-medium">Central de Ajuda</h3>
              <p className="text-muted-foreground max-w-md">
                Encontre respostas para suas dúvidas em nossa base de conhecimento ou entre em contato direto com nossa equipe de suporte.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Support;
