
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Bell, Check, Clock, Info, AlertTriangle, Truck, Package, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type NotificationType = "info" | "warning" | "success" | "error";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  isRead: boolean;
  icon?: JSX.Element;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Rota Otimizada",
    message: "IA otimizou as rotas de entrega de hoje, economizando 42 minutos.",
    time: "Agora",
    type: "success",
    isRead: false,
    icon: <RefreshCw className="h-4 w-4" />,
  },
  {
    id: "2",
    title: "Entrega Atrasada",
    message: "Pacote #D-1234 está atrasado devido a congestionamento.",
    time: "10 min atrás",
    type: "warning",
    isRead: false,
    icon: <Clock className="h-4 w-4" />,
  },
  {
    id: "3",
    title: "Novo Pedido",
    message: "10 novos pedidos recebidos da Acme Corp.",
    time: "30 min atrás",
    type: "info",
    isRead: true,
    icon: <Package className="h-4 w-4" />,
  },
  {
    id: "4",
    title: "Motorista Disponível",
    message: "John Smith está agora disponível para entregas.",
    time: "1 hora atrás",
    type: "info",
    isRead: true,
    icon: <Truck className="h-4 w-4" />,
  },
  {
    id: "5",
    title: "Atualização do Sistema",
    message: "Track Flow foi atualizado para a versão 2.3.0.",
    time: "2 horas atrás",
    type: "info",
    isRead: true,
    icon: <Info className="h-4 w-4" />,
  },
];

const getIconForType = (type: NotificationType, customIcon?: JSX.Element) => {
  if (customIcon) return customIcon;
  
  switch (type) {
    case "success":
      return <Check className="h-4 w-4" />;
    case "warning":
      return <AlertTriangle className="h-4 w-4" />;
    case "error":
      return <AlertTriangle className="h-4 w-4" />;
    case "info":
    default:
      return <Info className="h-4 w-4" />;
  }
};

const getBgColorForType = (type: NotificationType) => {
  switch (type) {
    case "success":
      return "bg-green-100 text-green-800";
    case "warning":
      return "bg-yellow-100 text-yellow-800";
    case "error":
      return "bg-red-100 text-red-800";
    case "info":
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const NotificationPanel = () => {
  const [notificationsList, setNotificationsList] = useState<Notification[]>(notifications);

  const markAllAsRead = () => {
    setNotificationsList(notificationsList.map(n => ({ ...n, isRead: true })));
    toast.success("Todas as notificações marcadas como lidas");
  };

  const handleNotificationClick = (notification: Notification) => {
    // Marca a notificação específica como lida
    if (!notification.isRead) {
      setNotificationsList(notificationsList.map(n => 
        n.id === notification.id ? { ...n, isRead: true } : n
      ));
    }
    
    // Exibe detalhes da notificação
    toast(notification.title, {
      description: notification.message,
    });
  };

  const unreadCount = notificationsList.filter(n => !n.isRead).length;

  return (
    <Card className="h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <Bell className="mr-2 h-5 w-5" /> 
          Notificações
          {unreadCount > 0 && (
            <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-trackflow-teal text-white rounded-full">
              {unreadCount}
            </span>
          )}
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
          Marcar todas como lidas
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[340px]">
          <div className="px-4 py-2">
            {notificationsList.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                Nenhuma notificação
              </div>
            ) : (
              notificationsList.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "flex items-start p-3 mb-2 rounded-md transition-colors cursor-pointer",
                    notification.isRead ? "bg-background" : "bg-gray-50"
                  )}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center h-8 w-8 rounded-full mr-3 flex-shrink-0",
                      getBgColorForType(notification.type)
                    )}
                  >
                    {getIconForType(notification.type, notification.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground ml-2">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <div className="h-2 w-2 bg-trackflow-teal rounded-full flex-shrink-0 mt-1.5 ml-2"></div>
                  )}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;
