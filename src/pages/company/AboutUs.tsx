
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Track Flow</title>
      </Helmet>
      <MainLayout>
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              A TrackFlow é uma empresa inovadora especializada em soluções de logística e gerenciamento de entregas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                <p>
                  Nossa missão é simplificar o gerenciamento logístico para empresas de todos os tamanhos, 
                  fornecendo ferramentas intuitivas e poderosas que otimizam operações e reduzem custos.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
                <p>
                  Buscamos transformar a indústria logística, tornando-a mais eficiente, 
                  sustentável e acessível através da inovação tecnológica e excelência operacional.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
            <p className="mb-4">
              Fundada em 2018, a TrackFlow nasceu da frustração com os sistemas logísticos existentes no mercado.
              Nossos fundadores, com ampla experiência no setor de transportes e tecnologia, identificaram a necessidade
              de uma solução abrangente que pudesse integrar todos os aspectos da logística moderna.
            </p>
            <p>
              Desde então, temos crescido constantemente, servindo clientes em diversos setores e
              continentes, sempre mantendo nosso compromisso com a inovação e satisfação do cliente.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default AboutUs;
