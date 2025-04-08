
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { 
  MapPin, Truck, BarChart3, Clock, 
  Calendar, Users, Shield, Globe 
} from "lucide-react";

const FeaturesPage = () => {
  return (
    <>
      <Helmet>
        <title>Features | Track Flow</title>
      </Helmet>
      <MainLayout>
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-4">Recursos</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore os poderosos recursos que fazem do TrackFlow a escolha ideal para seu gerenciamento logístico.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <MapPin className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rastreamento em Tempo Real</h3>
              <p>
                Acompanhe todas as suas entregas em tempo real através de um mapa interativo,
                permitindo visualizar rotas, status e previsões de entrega.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <Truck className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Frotas</h3>
              <p>
                Gerencie toda a sua frota em uma única plataforma, monitorando manutenção,
                disponibilidade e desempenho de cada veículo.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <Calendar className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Agendamento Otimizado</h3>
              <p>
                Planeje entregas de forma eficiente, considerando rotas, capacidade de veículos
                e janelas de tempo para maximizar a produtividade.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <BarChart3 className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análises Avançadas</h3>
              <p>
                Acesse relatórios detalhados e painéis analíticos para acompanhar desempenho,
                identificar tendências e tomar decisões baseadas em dados.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <Clock className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Otimização de Rotas</h3>
              <p>
                Utilize nossos algoritmos avançados para criar as rotas mais eficientes,
                economizando tempo, combustível e reduzindo custos operacionais.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <Users className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Equipe</h3>
              <p>
                Administre motoristas, despachantes e pessoal operacional em uma plataforma
                unificada, atribuindo tarefas e monitorando desempenho.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <Shield className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança Avançada</h3>
              <p>
                Proteja seus dados com nossa infraestrutura de segurança de nível empresarial,
                incluindo criptografia, autenticação em dois fatores e logs de auditoria.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <Globe className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Operações Globais</h3>
              <p>
                Opere em qualquer lugar do mundo com suporte para múltiplos idiomas, moedas
                e regulamentos locais de transporte.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default FeaturesPage;
