
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Track Flow</title>
      </Helmet>
      <MainLayout>
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Estamos aqui para ajudar! Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">Empresa</label>
                  <Input id="company" placeholder="Nome da sua empresa" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">Assunto</label>
                  <Input id="subject" placeholder="Como podemos ajudar?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Mensagem</label>
                  <Textarea id="message" placeholder="Descreva sua solicitação..." className="h-32" />
                </div>
                
                <Button className="w-full">Enviar mensagem</Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MailIcon className="h-6 w-6 text-trackflow-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contato@trackflow.com</p>
                      <p className="text-muted-foreground">suporte@trackflow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-trackflow-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-muted-foreground">+55 (11) 3456-7890</p>
                      <p className="text-muted-foreground">+55 (11) 9876-5432</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-trackflow-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-muted-foreground">Av. Paulista, 1000</p>
                      <p className="text-muted-foreground">Bela Vista, São Paulo - SP</p>
                      <p className="text-muted-foreground">CEP: 01310-100</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-trackflow-blue/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                <p className="text-muted-foreground mb-1">Segunda a Sexta: 9h às 18h</p>
                <p className="text-muted-foreground">Sábado: 9h às 13h</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Contact;
