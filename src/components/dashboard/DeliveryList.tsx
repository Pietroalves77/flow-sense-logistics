
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, MapPin, Clock, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { AssignDriverModal } from "./AssignDriverModal";
import { useDeliveries } from "@/hooks/useDeliveries";
import { Delivery } from "@/services/deliveryService";

type DeliveryStatus = "pending" | "in_progress" | "delivered" | "failed";

const statusConfig = {
  pending: {
    label: "Pendente",
    color: "bg-yellow-100 text-yellow-800",
  },
  in_progress: {
    label: "Em Andamento",
    color: "bg-blue-100 text-blue-800",
  },
  delivered: {
    label: "Entregue",
    color: "bg-green-100 text-green-800",
  },
  failed: {
    label: "Falhou",
    color: "bg-red-100 text-red-800",
  },
};

const DeliveryList = () => {
  const { deliveries, drivers, updateStatus, assignDriver, isLoading } = useDeliveries();
  const [selectedDeliveryId, setSelectedDeliveryId] = useState<string | null>(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);

  const handleUpdateStatus = (id: string, status: DeliveryStatus) => {
    updateStatus({ id, status });
  };

  const handleAssignDriver = (driverId: string) => {
    if (selectedDeliveryId) {
      assignDriver({ deliveryId: selectedDeliveryId, driverId });
    }
  };

  const handleViewDetails = (delivery: Delivery) => {
    toast(`Detalhes da entrega ${delivery.id}`, {
      description: `Cliente: ${delivery.customer}\nEndereço: ${delivery.address}\nStatus: ${statusConfig[delivery.status].label}\nItens: ${delivery.items}`,
      duration: 5000,
    });
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">Entregas Recentes</CardTitle>
          <Button variant="ghost" size="sm">
            Ver Todas
          </Button>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin h-6 w-6 rounded-full border-2 border-trackflow-blue border-t-transparent"></div>
            </div>
          ) : deliveries.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Nenhuma entrega encontrada
            </div>
          ) : (
            <div className="space-y-4">
              {deliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-1">
                      <span className="font-medium truncate mr-2">
                        {delivery.customer}
                      </span>
                      <Badge
                        variant="outline"
                        className={cn(
                          "font-normal text-xs",
                          statusConfig[delivery.status].color
                        )}
                      >
                        {statusConfig[delivery.status].label}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                      <span className="truncate">{delivery.address}</span>
                    </div>
                    {delivery.driver && (
                      <div className="text-xs mt-1 text-trackflow-blue">
                        Motorista: {delivery.driver}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <div className="flex items-center mr-4 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>{delivery.time}</span>
                    </div>
                    <div className="flex items-center mr-4 text-sm text-muted-foreground">
                      <Package className="h-3.5 w-3.5 mr-1" />
                      <span>{delivery.items} itens</span>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewDetails(delivery)}>
                          Ver Detalhes
                        </DropdownMenuItem>
                        
                        {delivery.status === "pending" && (
                          <DropdownMenuItem 
                            onClick={() => {
                              setSelectedDeliveryId(delivery.id);
                              setIsAssignModalOpen(true);
                            }}
                          >
                            Atribuir Motorista
                          </DropdownMenuItem>
                        )}
                        
                        {delivery.status === "in_progress" && (
                          <DropdownMenuItem 
                            onClick={() => handleUpdateStatus(delivery.id, "delivered")}
                          >
                            Marcar como Entregue
                          </DropdownMenuItem>
                        )}
                        
                        {(delivery.status === "pending" || delivery.status === "in_progress") && (
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleUpdateStatus(delivery.id, "failed")}
                          >
                            Marcar como Falha
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AssignDriverModal
        open={isAssignModalOpen}
        onOpenChange={setIsAssignModalOpen}
        onAssign={handleAssignDriver}
        drivers={drivers}
        deliveryId={selectedDeliveryId || ""}
      />
    </>
  );
};

export default DeliveryList;
