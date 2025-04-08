
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Truck, BarChart3, Clock, 
  Calendar, Users, Shield, Globe, ArrowRight
} from "lucide-react";

const FeaturesPage = () => {
  return (
    <>
      <Helmet>
        <title>Features | Track Flow</title>
      </Helmet>
      <MainLayout>
        <div className="container mx-auto py-16 px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-4">Recursos</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore os poderosos recursos que fazem do TrackFlow a escolha ideal para seu gerenciamento logístico.
            </p>
            <Button 
              size="lg" 
              className="bg-trackflow-blue hover:bg-trackflow-blue/90 text-white" 
              asChild
            >
              <Link to="/signup">
                Experimente grátis por 14 dias <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <MapPin className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rastreamento em Tempo Real</h3>
              <p>
                Acompanhe todas as suas entregas em tempo real através de um mapa interativo,
                permitindo visualizar rotas, status e previsões de entrega.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Truck className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Frotas</h3>
              <p>
                Gerencie toda a sua frota em uma única plataforma, monitorando manutenção,
                disponibilidade e desempenho de cada veículo.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Calendar className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Agendamento Otimizado</h3>
              <p>
                Planeje entregas de forma eficiente, considerando rotas, capacidade de veículos
                e janelas de tempo para maximizar a produtividade.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <BarChart3 className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análises Avançadas</h3>
              <p>
                Acesse relatórios detalhados e painéis analíticos para acompanhar desempenho,
                identificar tendências e tomar decisões baseadas em dados.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Clock className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Otimização de Rotas</h3>
              <p>
                Utilize nossos algoritmos avançados para criar as rotas mais eficientes,
                economizando tempo, combustível e reduzindo custos operacionais.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Equipe</h3>
              <p>
                Administre motoristas, despachantes e pessoal operacional em uma plataforma
                unificada, atribuindo tarefas e monitorando desempenho.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança Avançada</h3>
              <p>
                Proteja seus dados com nossa infraestrutura de segurança de nível empresarial,
                incluindo criptografia, autenticação em dois fatores e logs de auditoria.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Globe className="h-10 w-10 text-trackflow-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Operações Globais</h3>
              <p>
                Opere em qualquer lugar do mundo com suporte para múltiplos idiomas, moedas
                e regulamentos locais de transporte.
              </p>
            </div>
            
            <div className="bg-trackflow-blue/10 border border-trackflow-blue/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold mb-2 text-trackflow-blue">Pronto para começar?</h3>
              <p className="mb-6">
                Inicie seu teste gratuito de 14 dias hoje e descubra como o TrackFlow pode transformar sua operação logística.
              </p>
              <Button asChild>
                <Link to="/signup">
                  Comece agora <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default FeaturesPage;
