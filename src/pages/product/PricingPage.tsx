
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Track Flow</title>
      </Helmet>
      <MainLayout>
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Preços</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Escolha o plano perfeito para o seu negócio. 
            Todos os planos incluem acesso a recursos essenciais para otimizar suas operações logísticas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Básico</h3>
                <div className="text-3xl font-bold mb-2">R$199<span className="text-base font-normal text-muted-foreground">/mês</span></div>
                <p className="text-muted-foreground">Ideal para pequenas empresas começando com logística.</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Até 5 usuários</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Rastreamento de até 500 entregas/mês</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Mapa em tempo real</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Relatórios básicos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Suporte por email</span>
                </li>
              </ul>
              
              <button className="w-full py-2 border border-trackflow-blue text-trackflow-blue font-medium rounded-md hover:bg-trackflow-blue hover:text-white transition-colors">
                Começar grátis
              </button>
            </div>
            
            <div className="bg-white border-2 border-trackflow-blue rounded-lg shadow-lg p-6 transform md:-translate-y-4">
              <div className="absolute -top-3 right-4 bg-trackflow-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                Mais popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Profissional</h3>
                <div className="text-3xl font-bold mb-2">R$499<span className="text-base font-normal text-muted-foreground">/mês</span></div>
                <p className="text-muted-foreground">Para empresas em crescimento com necessidades logísticas complexas.</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Até 15 usuários</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Entregas ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Mapa em tempo real avançado</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Otimização de rotas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Analytics avançado</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>API para integrações</span>
                </li>
              </ul>
              
              <button className="w-full py-2 bg-trackflow-blue text-white font-medium rounded-md hover:bg-trackflow-blue/90 transition-colors">
                Começar agora
              </button>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Empresarial</h3>
                <div className="text-3xl font-bold mb-2">Personalizado</div>
                <p className="text-muted-foreground">Para grandes empresas com necessidades específicas.</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Usuários ilimitados</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Entregas ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Todas as funcionalidades premium</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Integrações personalizadas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Hospedagem dedicada</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Gerente de conta dedicado</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Suporte 24/7</span>
                </li>
              </ul>
              
              <button className="w-full py-2 border border-trackflow-blue text-trackflow-blue font-medium rounded-md hover:bg-trackflow-blue hover:text-white transition-colors">
                Fale com vendas
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PricingPage;
