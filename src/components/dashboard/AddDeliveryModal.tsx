
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Delivery } from "@/services/deliveryService";

const deliverySchema = z.object({
  customer: z.string().min(3, { message: "Nome do cliente é obrigatório" }),
  address: z.string().min(5, { message: "Endereço é obrigatório" }),
  items: z.coerce.number().int().positive({ message: "Número de itens deve ser positivo" }),
  time: z.string().min(1, { message: "Horário é obrigatório" }),
});

type DeliveryFormValues = z.infer<typeof deliverySchema>;

interface AddDeliveryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddDelivery: (delivery: Omit<Delivery, "id">) => void;
}

export function AddDeliveryModal({
  open,
  onOpenChange,
  onAddDelivery,
}: AddDeliveryModalProps) {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<DeliveryFormValues>({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      customer: "",
      address: "",
      items: 1,
      time: "",
    },
  });

  function onSubmit(data: DeliveryFormValues) {
    setIsPending(true);
    
    // Adicionar coordenadas aleatórias para simulação
    const lat = 37.7749 + (Math.random() - 0.5) * 0.05;
    const lng = -122.4194 + (Math.random() - 0.5) * 0.05;
    
    const newDelivery: Omit<Delivery, "id"> = {
      customer: data.customer,
      address: data.address,
      items: data.items,
      time: data.time,
      status: "pending",
      coordinates: { lat, lng },
    };

    onAddDelivery(newDelivery);
    
    setTimeout(() => {
      setIsPending(false);
      form.reset();
      onOpenChange(false);
    }, 800);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Entrega</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="customer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Cliente</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do cliente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Endereço completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="items"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Itens</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário de Entrega</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                disabled={isPending}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Adicionando..." : "Adicionar Entrega"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
