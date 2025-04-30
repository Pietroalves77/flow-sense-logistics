
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import AddressInput from "@/components/route/AddressInput";
import RouteActionButtons from "@/components/route/RouteActionButtons";
import { Button } from "@/components/ui/button";

const RoutePlanner = () => {
  const [addresses, setAddresses] = useState<string[]>(["", ""]);
  const { toast } = useToast();
  
  const addAddressField = () => {
    setAddresses([...addresses, ""]);
  };

  const removeAddressField = (index: number) => {
    if (addresses.length <= 2) {
      toast({
        title: "Não é possível remover",
        description: "Uma rota precisa ter pelo menos dois endereços",
        variant: "destructive",
      });
      return;
    }
    
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  const updateAddress = (index: number, value: string) => {
    const newAddresses = [...addresses];
    newAddresses[index] = value;
    setAddresses(newAddresses);
  };

  const handleClearForm = () => {
    setAddresses(["", ""]);
    toast({
      title: "Formulário limpo",
      description: "Todos os campos foram limpos.",
    });
  };

  const sanitizeAddress = (address: string): string => {
    // Remove extra spaces and trim
    return address.replace(/\s+/g, " ").trim();
  };

  const handleCreateRoute = () => {
    // Validate addresses
    const emptyAddresses = addresses.filter(addr => !addr.trim()).length;
    
    if (emptyAddresses > 0) {
      toast({
        title: "Endereços incompletos",
        description: `${emptyAddresses} endereços estão vazios. Preencha todos os campos para continuar.`,
        variant: "destructive",
      });
      return;
    }
    
    // Sanitize addresses
    const sanitizedAddresses = addresses.map(sanitizeAddress);
    
    // Prepare data for the backend
    const routeData = {
      route: sanitizedAddresses
    };
    
    toast({
      title: "Rota criada com sucesso!",
      description: `Rota com ${addresses.length} paradas foi criada.`,
    });
    
    // In a real application, this would send data to the backend
    console.log("Route data to be sent to backend:", routeData);
  };

  return (
    <>
      <Helmet>
        <title>Route Planner | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Planejador de Rotas</h1>
              <p className="text-muted-foreground">
                Otimize suas rotas de entrega para máxima eficiência
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-white to-blue-50 border rounded-lg shadow-sm p-6 mb-4">
            <div className="mb-6">
              <h2 className="text-xl font-medium mb-2">Criar Nova Rota</h2>
              <p className="text-muted-foreground">
                Adicione os endereços de origem, destino e paradas intermediárias para criar sua rota
              </p>
            </div>
            
            <div className="space-y-4">
              {addresses.map((address, index) => (
                <div key={index} className="flex items-center gap-2">
                  <AddressInput
                    value={address}
                    onChange={(value) => updateAddress(index, value)}
                    placeholder={index === 0 ? "Endereço de origem" : index === addresses.length - 1 ? "Endereço de destino" : `Parada ${index}`}
                    label={index === 0 ? "Origem" : index === addresses.length - 1 ? "Destino" : `Parada ${index}`}
                  />
                  
                  {addresses.length > 2 && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="mt-8"
                      onClick={() => removeAddressField(index)}
                    >
                      <span className="sr-only">Remover endereço</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </Button>
                  )}
                </div>
              ))}
              
              <div className="flex justify-between items-center mt-6">
                <Button
                  variant="outline"
                  className="flex items-center gap-1 transition-all hover:bg-blue-50"
                  onClick={addAddressField}
                >
                  <Plus className="h-4 w-4" />
                  <span>Adicionar Parada</span>
                </Button>
                
                <RouteActionButtons 
                  onCreateRoute={handleCreateRoute}
                  onClear={handleClearForm} 
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6 h-[40vh]">
            <div className="h-full flex items-center justify-center bg-slate-100 rounded-md">
              <div className="text-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-trackflow-blue opacity-70">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                <h3 className="text-lg font-medium">Visualização do Mapa</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  A visualização da rota aparecerá aqui após a criação
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default RoutePlanner;
