
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Track Flow</title>
      </Helmet>
      <MainLayout>
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8">Carreiras</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Junte-se à nossa equipe e ajude a transformar o futuro da logística.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Desenvolvedor Full Stack</h3>
              <p className="text-muted-foreground mb-4">São Paulo, Brasil ou Remoto</p>
              <p className="mb-4">
                Estamos procurando um desenvolvedor Full Stack para trabalhar em nossa plataforma principal,
                implementando novos recursos e melhorando a experiência do usuário.
              </p>
              <button className="text-trackflow-blue font-medium">Ver detalhes →</button>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Especialista em Operações Logísticas</h3>
              <p className="text-muted-foreground mb-4">Rio de Janeiro, Brasil</p>
              <p className="mb-4">
                Buscamos um especialista em operações logísticas para ajudar a aprimorar 
                nossos produtos com conhecimento avançado em logística da vida real.
              </p>
              <button className="text-trackflow-blue font-medium">Ver detalhes →</button>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Gerente de Produto</h3>
              <p className="text-muted-foreground mb-4">São Paulo, Brasil</p>
              <p className="mb-4">
                Procuramos um gerente de produto apaixonado para liderar o desenvolvimento 
                de novos recursos e garantir que nossos produtos atendam às necessidades do mercado.
              </p>
              <button className="text-trackflow-blue font-medium">Ver detalhes →</button>
            </div>
            
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Especialista em UX/UI</h3>
              <p className="text-muted-foreground mb-4">Remoto</p>
              <p className="mb-4">
                Buscamos um designer de UX/UI para criar interfaces intuitivas e atraentes 
                que tornem nossos produtos fáceis de usar e visualmente impressionantes.
              </p>
              <button className="text-trackflow-blue font-medium">Ver detalhes →</button>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Não encontrou a vaga ideal?</h2>
            <p className="mb-6">
              Envie seu currículo para nossa base de talentos e entraremos em contato quando 
              surgir uma oportunidade compatível com seu perfil.
            </p>
            <button className="bg-trackflow-blue text-white py-2 px-6 rounded-md font-medium">
              Enviar currículo
            </button>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Careers;
