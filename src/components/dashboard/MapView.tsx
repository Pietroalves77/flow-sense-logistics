
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, MapPin, RefreshCw, Locate } from "lucide-react";
import { useDeliveries } from "@/hooks/useDeliveries";
import { toast } from "sonner";

const MapView = () => {
  const { deliveries } = useDeliveries();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLayersClick = () => {
    toast("Camadas do mapa", {
      description: "Você pode alternar entre diferentes visualizações do mapa: Padrão, Satélite, Tráfego",
    });
  };

  const handleLocateClick = () => {
    toast("Localização centralizada", {
      description: "Mapa centralizado na sua localização atual",
    });
  };

  const handleRefreshMap = () => {
    setIsMapLoaded(false);
    setTimeout(() => setIsMapLoaded(true), 1000);
    toast("Mapa atualizado", {
      description: "Dados de localização atualizados",
    });
  };

  return (
    <Card className="h-[500px] sm:h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Rastreamento de Frota em Tempo Real</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleLayersClick}>
            <Layers className="h-4 w-4 mr-1" /> Camadas
          </Button>
          <Button variant="outline" size="sm" onClick={handleLocateClick}>
            <Locate className="h-4 w-4 mr-1" /> Localizar
          </Button>
          <Button variant="outline" size="sm" onClick={handleRefreshMap}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-60px)]">
        <div ref={mapContainerRef} className="h-full w-full p-0 relative">
          {!isMapLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-pulse text-center">
                <div className="h-16 w-16 rounded-full bg-trackflow-blue/20 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-trackflow-blue animate-bounce" />
                </div>
                <p className="text-muted-foreground">Carregando mapa...</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gray-100 overflow-hidden">
              <div className="w-full h-full relative">
                {/* Mapa simulado com CSS */}
                <div 
                  className="w-full h-full" 
                  style={{ 
                    backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4194,37.7749,11,0/800x400?access_token=pk.example')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#f3f4f6',
                  }}
                ></div>
                
                {/* Marcadores simulados */}
                {deliveries.map((delivery) => (
                  delivery.coordinates && (
                    <div 
                      key={delivery.id}
                      className={`absolute w-5 h-5 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:z-50`}
                      style={{
                        top: `${(0.5 - (delivery.coordinates.lat - 37.7749) * 10) * 100}%`,
                        left: `${(0.5 - (delivery.coordinates.lng + 122.4194) * 10) * 100}%`,
                        backgroundColor: 
                          delivery.status === "delivered" ? "rgb(34, 197, 94)" :
                          delivery.status === "in_progress" ? "rgb(59, 130, 246)" :
                          delivery.status === "failed" ? "rgb(239, 68, 68)" : "rgb(234, 179, 8)",
                      }}
                      onClick={() => toast(`Entrega #${delivery.id}`, {
                        description: `Cliente: ${delivery.customer}\nStatus: ${delivery.status}${delivery.driver ? `\nMotorista: ${delivery.driver}` : ''}`,
                      })}
                    >
                      <MapPin className="h-3 w-3 text-white" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                        {delivery.customer}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;
