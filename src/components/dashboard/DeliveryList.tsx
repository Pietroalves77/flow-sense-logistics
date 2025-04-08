
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

type DeliveryStatus = "pending" | "in_progress" | "delivered" | "failed";

interface Delivery {
  id: string;
  customer: string;
  address: string;
  time: string;
  status: DeliveryStatus;
  items: number;
}

const deliveries: Delivery[] = [
  {
    id: "DEL-1234",
    customer: "John Smith",
    address: "123 Main St, San Francisco, CA",
    time: "10:30 AM",
    status: "in_progress",
    items: 3,
  },
  {
    id: "DEL-1235",
    customer: "Sarah Johnson",
    address: "456 Market St, San Francisco, CA",
    time: "11:15 AM",
    status: "pending",
    items: 1,
  },
  {
    id: "DEL-1236",
    customer: "Michael Brown",
    address: "789 Oak St, San Francisco, CA",
    time: "09:45 AM",
    status: "delivered",
    items: 2,
  },
  {
    id: "DEL-1237",
    customer: "Emily Davis",
    address: "321 Pine St, San Francisco, CA",
    time: "12:00 PM",
    status: "pending",
    items: 4,
  },
  {
    id: "DEL-1238",
    customer: "David Wilson",
    address: "654 Cedar St, San Francisco, CA",
    time: "08:30 AM",
    status: "failed",
    items: 2,
  },
];

const statusConfig = {
  pending: {
    label: "Pending",
    color: "bg-yellow-100 text-yellow-800",
  },
  in_progress: {
    label: "In Progress",
    color: "bg-blue-100 text-blue-800",
  },
  delivered: {
    label: "Delivered",
    color: "bg-green-100 text-green-800",
  },
  failed: {
    label: "Failed",
    color: "bg-red-100 text-red-800",
  },
};

const DeliveryList = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Deliveries</CardTitle>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
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
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <div className="flex items-center mr-4 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{delivery.time}</span>
                </div>
                <div className="flex items-center mr-4 text-sm text-muted-foreground">
                  <Package className="h-3.5 w-3.5 mr-1" />
                  <span>{delivery.items} items</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Assign Driver</DropdownMenuItem>
                    <DropdownMenuItem>Edit Delivery</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Cancel Delivery
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryList;
