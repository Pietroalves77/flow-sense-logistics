
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Bell, Check, Clock, Info, AlertTriangle, Truck, Package, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

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
    title: "Route Optimized",
    message: "AI has optimized today's delivery routes, saving 42 minutes.",
    time: "Just now",
    type: "success",
    isRead: false,
    icon: <RefreshCw className="h-4 w-4" />,
  },
  {
    id: "2",
    title: "Delivery Delayed",
    message: "Package #D-1234 is delayed due to traffic congestion.",
    time: "10 min ago",
    type: "warning",
    isRead: false,
    icon: <Clock className="h-4 w-4" />,
  },
  {
    id: "3",
    title: "New Order",
    message: "10 new orders received from Acme Corp.",
    time: "30 min ago",
    type: "info",
    isRead: true,
    icon: <Package className="h-4 w-4" />,
  },
  {
    id: "4",
    title: "Driver Available",
    message: "John Smith is now available for deliveries.",
    time: "1 hour ago",
    type: "info",
    isRead: true,
    icon: <Truck className="h-4 w-4" />,
  },
  {
    id: "5",
    title: "System Update",
    message: "Track Flow has been updated to version 2.3.0.",
    time: "2 hours ago",
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
  return (
    <Card className="h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <Bell className="mr-2 h-5 w-5" /> Notifications
        </CardTitle>
        <Button variant="ghost" size="sm">
          Mark all as read
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[340px]">
          <div className="px-4 py-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "flex items-start p-3 mb-2 rounded-md transition-colors",
                  notification.isRead ? "bg-background" : "bg-gray-50"
                )}
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
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;
