
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, Clock, Package, RotateCw, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface NotificationPanelProps {
  fullPage?: boolean;
}

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: React.ReactNode;
  type: "delivery" | "system" | "alert";
};

const notificationsData: Notification[] = [
  {
    id: "1",
    title: "Nova entrega",
    message: "Uma nova entrega foi atribuída à sua rota",
    time: "5 minutos atrás",
    read: false,
    icon: <Package className="h-5 w-5" />,
    type: "delivery",
  },
  {
    id: "2",
    title: "Rota otimizada",
    message: "IA otimizou suas rotas de entrega para hoje",
    time: "1 hora atrás",
    read: false,
    icon: <RotateCw className="h-5 w-5" />,
    type: "system",
  },
  {
    id: "3",
    title: "Atualização do sistema",
    message: "O Track Flow foi atualizado para a versão 2.3",
    time: "Ontem",
    read: false,
    icon: <Bell className="h-5 w-5" />,
    type: "system",
  },
  {
    id: "4",
    title: "Entrega atrasada",
    message: "A entrega #1234 está atrasada. Entre em contato com o motorista.",
    time: "3 horas atrás",
    read: true,
    icon: <Clock className="h-5 w-5" />,
    type: "alert",
  },
  {
    id: "5",
    title: "Entrega concluída",
    message: "A entrega #5678 foi entregue com sucesso",
    time: "Ontem",
    read: true,
    icon: <CheckCircle className="h-5 w-5" />,
    type: "delivery",
  }
];

if (typeof window !== "undefined") {
  // Adicionar mais notificações para a página completa
  for (let i = 6; i <= 12; i++) {
    notificationsData.push({
      id: i.toString(),
      title: `Motorista disponível`,
      message: `O motorista João Silva está disponível para novas entregas`,
      time: i % 2 === 0 ? "2 dias atrás" : "Semana passada",
      read: true,
      icon: <Truck className="h-5 w-5" />,
      type: "system",
    });
  }
}

const NotificationPanel = ({ fullPage = false }: NotificationPanelProps) => {
  const [notifications, setNotifications] = useState<Notification[]>(notificationsData);
  const [filter, setFilter] = useState<string>("all");
  const navigate = useNavigate();
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const filteredNotifications = notifications.filter(notification => {
    if (filter === "all") return true;
    if (filter === "unread") return !notification.read;
    return notification.type === filter;
  });
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };
  
  const handleViewAllClick = () => {
    if (!fullPage) {
      navigate('/notifications');
    }
  };
  
  return (
    <Card className={cn(fullPage ? "h-auto" : "h-[calc(100vh-16rem)]")}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>
            Você tem {unreadCount} notificações não lidas
          </CardDescription>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Marcar todas como lidas
          </Button>
        )}
      </CardHeader>
      
      {fullPage && (
        <div className="px-6 pb-2 flex space-x-2">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("all")}
          >
            Todas
          </Button>
          <Button 
            variant={filter === "unread" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("unread")}
          >
            Não lidas
          </Button>
          <Button 
            variant={filter === "delivery" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("delivery")}
          >
            Entregas
          </Button>
          <Button 
            variant={filter === "system" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("system")}
          >
            Sistema
          </Button>
          <Button 
            variant={filter === "alert" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("alert")}
          >
            Alertas
          </Button>
        </div>
      )}
      
      <CardContent className={cn("px-2 overflow-auto", fullPage ? "max-h-[calc(100vh-20rem)]" : "h-[calc(100%-5rem)]")}>
        <div className="space-y-1">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Não há notificações {filter !== "all" ? "com este filtro" : ""}
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id}
                className={cn(
                  "flex items-start space-x-4 rounded-md p-3 transition-all hover:bg-accent/40 cursor-pointer",
                  !notification.read && "bg-accent/20"
                )}
                onClick={() => markAsRead(notification.id)}
              >
                <div className={cn(
                  "shrink-0 rounded-full p-1",
                  notification.type === "alert" ? "bg-destructive/10 text-destructive" :
                  notification.type === "delivery" ? "bg-green-500/10 text-green-500" :
                  "bg-blue-500/10 text-blue-500"
                )}>
                  {notification.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    {!notification.read && (
                      <Badge variant="outline" className="ml-auto">
                        Nova
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      {!fullPage && (
        <div className="p-2 border-t">
          <Button 
            variant="ghost" 
            className="w-full justify-center" 
            size="sm"
            onClick={handleViewAllClick}
          >
            Ver todas as notificações
          </Button>
        </div>
      )}
    </Card>
  );
};

export default NotificationPanel;
