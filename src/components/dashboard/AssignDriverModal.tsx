
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import type { Driver } from "@/services/deliveryService";

interface AssignDriverModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAssign: (driverId: string) => void;
  drivers: Driver[];
  deliveryId: string;
}

export function AssignDriverModal({
  open,
  onOpenChange,
  onAssign,
  drivers,
  deliveryId,
}: AssignDriverModalProps) {
  const [selectedDriver, setSelectedDriver] = useState<string>("");
  const [isPending, setIsPending] = useState(false);

  const availableDrivers = drivers.filter((driver) => driver.available);

  const handleAssign = () => {
    if (!selectedDriver) return;
    
    setIsPending(true);
    onAssign(selectedDriver);
    
    setTimeout(() => {
      setIsPending(false);
      setSelectedDriver("");
      onOpenChange(false);
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Atribuir Motorista</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">
            Selecione um motorista disponível para a entrega {deliveryId}
          </p>
          <Select
            value={selectedDriver}
            onValueChange={setSelectedDriver}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione um motorista" />
            </SelectTrigger>
            <SelectContent>
              {availableDrivers.length > 0 ? (
                availableDrivers.map((driver) => (
                  <SelectItem key={driver.id} value={driver.id}>
                    {driver.name} - {driver.vehicle}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="none" disabled>
                  Nenhum motorista disponível
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleAssign} 
            disabled={!selectedDriver || isPending}
          >
            {isPending ? "Atribuindo..." : "Atribuir Motorista"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
