
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

interface RouteActionButtonsProps {
  onCreateRoute: () => void;
  onClear?: () => void;
}

const RouteActionButtons = ({
  onCreateRoute,
  onClear,
}: RouteActionButtonsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        className="text-gray-700 hover:bg-gray-100 transition-colors"
        onClick={onClear}
      >
        Limpar
      </Button>
      
      <Button
        variant="default"
        className="bg-trackflow-blue hover:bg-trackflow-blue/90 text-white flex items-center gap-1 shadow-sm transition-all hover:shadow"
        onClick={onCreateRoute}
      >
        <Compass className="h-4 w-4" />
        <span>Criar Rota</span>
      </Button>
    </div>
  );
};

export default RouteActionButtons;
