
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deliveryService, Delivery } from "@/services/deliveryService";

export function useDeliveries() {
  const queryClient = useQueryClient();
  
  // Consulta para obter entregas
  const { 
    data: deliveries = [], 
    isLoading: isLoadingDeliveries,
    error: deliveriesError 
  } = useQuery({
    queryKey: ['deliveries'],
    queryFn: deliveryService.getDeliveries,
  });
  
  // Consulta para obter motoristas
  const { 
    data: drivers = [], 
    isLoading: isLoadingDrivers,
  } = useQuery({
    queryKey: ['drivers'],
    queryFn: deliveryService.getDrivers,
  });
  
  // Consulta para obter estatísticas
  const { 
    data: stats, 
    isLoading: isLoadingStats,
  } = useQuery({
    queryKey: ['stats'],
    queryFn: deliveryService.getStats,
  });
  
  // Mutação para adicionar nova entrega
  const addDeliveryMutation = useMutation({
    mutationFn: deliveryService.addDelivery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deliveries'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
  
  // Mutação para atualizar status de entrega
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: Delivery["status"] }) => 
      deliveryService.updateDeliveryStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deliveries'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
  
  // Mutação para atribuir motorista
  const assignDriverMutation = useMutation({
    mutationFn: ({ deliveryId, driverId }: { deliveryId: string; driverId: string }) => 
      deliveryService.assignDriver(deliveryId, driverId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deliveries'] });
      queryClient.invalidateQueries({ queryKey: ['drivers'] });
    },
  });
  
  return {
    deliveries,
    drivers,
    stats,
    isLoading: isLoadingDeliveries || isLoadingDrivers || isLoadingStats,
    error: deliveriesError,
    addDelivery: addDeliveryMutation.mutate,
    updateStatus: updateStatusMutation.mutate,
    assignDriver: assignDriverMutation.mutate,
  };
}
