
import { toast } from "sonner";

export interface Delivery {
  id: string;
  customer: string;
  address: string;
  time: string;
  status: "pending" | "in_progress" | "delivered" | "failed";
  items: number;
  coordinates?: { lat: number; lng: number };
  driver?: string;
}

export interface Driver {
  id: string;
  name: string;
  available: boolean;
  activeDeliveries: number;
  vehicle: string;
}

// Dados simulados para o dashboard
const mockDeliveries: Delivery[] = [
  {
    id: "DEL-1234",
    customer: "John Smith",
    address: "123 Main St, San Francisco, CA",
    time: "10:30 AM",
    status: "in_progress",
    items: 3,
    coordinates: { lat: 37.7749, lng: -122.4194 },
    driver: "Carlos Silva"
  },
  {
    id: "DEL-1235",
    customer: "Sarah Johnson",
    address: "456 Market St, San Francisco, CA",
    time: "11:15 AM",
    status: "pending",
    items: 1,
    coordinates: { lat: 37.7899, lng: -122.4009 }
  },
  {
    id: "DEL-1236",
    customer: "Michael Brown",
    address: "789 Oak St, San Francisco, CA",
    time: "09:45 AM",
    status: "delivered",
    items: 2,
    coordinates: { lat: 37.7699, lng: -122.4148 },
    driver: "Maria Oliveira"
  },
  {
    id: "DEL-1237",
    customer: "Emily Davis",
    address: "321 Pine St, San Francisco, CA",
    time: "12:00 PM",
    status: "pending",
    items: 4,
    coordinates: { lat: 37.7925, lng: -122.4382 }
  },
  {
    id: "DEL-1238",
    customer: "David Wilson",
    address: "654 Cedar St, San Francisco, CA",
    time: "08:30 AM",
    status: "failed",
    items: 2,
    coordinates: { lat: 37.7569, lng: -122.4148 },
    driver: "José Pereira"
  },
];

const mockDrivers: Driver[] = [
  { id: "DRV-001", name: "Carlos Silva", available: true, activeDeliveries: 1, vehicle: "Van" },
  { id: "DRV-002", name: "Maria Oliveira", available: true, activeDeliveries: 0, vehicle: "Motorcycle" },
  { id: "DRV-003", name: "José Pereira", available: false, activeDeliveries: 1, vehicle: "Truck" },
  { id: "DRV-004", name: "Ana Costa", available: true, activeDeliveries: 0, vehicle: "Van" },
  { id: "DRV-005", name: "Paulo Santos", available: true, activeDeliveries: 0, vehicle: "Motorcycle" },
];

// Serviço para gerenciar entregas
export const deliveryService = {
  // Obter todas as entregas
  getDeliveries: (): Promise<Delivery[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockDeliveries]);
      }, 600);
    });
  },

  // Obter entregadores
  getDrivers: (): Promise<Driver[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockDrivers]);
      }, 500);
    });
  },

  // Adicionar nova entrega
  addDelivery: (delivery: Omit<Delivery, "id">): Promise<Delivery> => {
    return new Promise((resolve) => {
      const newDelivery = {
        ...delivery,
        id: `DEL-${Math.floor(1000 + Math.random() * 9000)}`,
      };
      
      mockDeliveries.unshift(newDelivery);
      
      setTimeout(() => {
        toast.success("Nova entrega adicionada com sucesso!");
        resolve(newDelivery);
      }, 800);
    });
  },

  // Atualizar status de entrega
  updateDeliveryStatus: (id: string, status: Delivery["status"]): Promise<Delivery> => {
    return new Promise((resolve, reject) => {
      const deliveryIndex = mockDeliveries.findIndex(d => d.id === id);
      
      if (deliveryIndex === -1) {
        reject(new Error("Entrega não encontrada"));
        return;
      }
      
      mockDeliveries[deliveryIndex] = {
        ...mockDeliveries[deliveryIndex],
        status
      };
      
      setTimeout(() => {
        toast.success(`Status da entrega ${id} atualizado para ${status}`);
        resolve(mockDeliveries[deliveryIndex]);
      }, 600);
    });
  },

  // Atribuir motorista à entrega
  assignDriver: (deliveryId: string, driverId: string): Promise<Delivery> => {
    return new Promise((resolve, reject) => {
      const deliveryIndex = mockDeliveries.findIndex(d => d.id === deliveryId);
      const driver = mockDrivers.find(d => d.id === driverId);
      
      if (deliveryIndex === -1 || !driver) {
        reject(new Error("Entrega ou motorista não encontrado"));
        return;
      }
      
      mockDeliveries[deliveryIndex] = {
        ...mockDeliveries[deliveryIndex],
        driver: driver.name,
        status: "in_progress"
      };
      
      // Atualiza o motorista
      const driverIndex = mockDrivers.findIndex(d => d.id === driverId);
      mockDrivers[driverIndex] = {
        ...mockDrivers[driverIndex],
        activeDeliveries: mockDrivers[driverIndex].activeDeliveries + 1
      };
      
      setTimeout(() => {
        toast.success(`Entrega ${deliveryId} atribuída a ${driver.name}`);
        resolve(mockDeliveries[deliveryIndex]);
      }, 700);
    });
  },

  // Obter estatísticas
  getStats: () => {
    return new Promise((resolve) => {
      const stats = {
        totalDeliveries: mockDeliveries.length,
        onTimeRate: 94.2,
        activeDrivers: mockDrivers.filter(d => d.available).length,
        avgDeliveryTime: 42, // minutos
      };
      
      setTimeout(() => {
        resolve(stats);
      }, 400);
    });
  }
};
