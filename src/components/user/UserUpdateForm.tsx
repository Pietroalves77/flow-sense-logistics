
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, UserUpdatePayload } from "@/types/user";
import { userService } from "@/services/userService";
import { toast } from "sonner";

import {
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import UserFormFields from "./UserFormFields";
import UserPasswordField from "./UserPasswordField";

interface UserUpdateFormProps {
  userId: string;
  onSuccess?: () => void;
  isAdminMode?: boolean;
}

const UserUpdateForm = ({ userId, onSuccess, isAdminMode = false }: UserUpdateFormProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  
  // Define validation schema
  const formSchema = z.object({
    identifier: z.string().max(12).nullable(),
    email: z.string().email("Email inválido").nullable(),
    role: z.string().min(1, "Função é obrigatória"),
    is_active: z.boolean(),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").nullable().optional(),
  }).refine(data => (!data.identifier && data.email) || (data.identifier && !data.email), {
    message: "Você deve fornecer identifier OU email, não ambos ou nenhum",
    path: ["identifier"],
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: null,
      email: null,
      role: "",
      is_active: false,
      password: null,
    },
  });

  // Load user data
  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true);
        const userData = await userService.getUser(userId);
        setUser(userData);
        
        // Populate form with user data
        form.reset({
          identifier: userData.identifier,
          email: userData.email,
          role: userData.role,
          is_active: userData.is_active,
          password: null, // Don't populate password
        });
      } catch (error) {
        toast.error("Erro ao carregar dados do usuário");
        console.error("Error loading user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [userId, form]);

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);
      
      const updateData: UserUpdatePayload = {
        identifier: values.identifier,
        email: values.email,
        role: values.role,
        is_active: values.is_active,
        password: values.password || null,
      };
      
      const success = await userService.updateUser(userId, updateData);
      
      if (success && onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("Erro ao atualizar usuário");
      console.error("Error updating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIdentifierChange = (value: string) => {
    if (value) {
      form.setValue("email", null);
    }
    form.setValue("identifier", value || null);
  };

  const handleEmailChange = (value: string) => {
    if (value) {
      form.setValue("identifier", null);
    }
    form.setValue("email", value || null);
  };

  if (isLoading && !user) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse-slow text-trackflow-blue">Carregando...</div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <UserFormFields 
          control={form.control}
          isLoading={isLoading}
          isAdminMode={isAdminMode}
          userId={userId}
          handleIdentifierChange={handleIdentifierChange}
          handleEmailChange={handleEmailChange}
        />
        
        <UserPasswordField
          control={form.control}
          isLoading={isLoading}
        />
        
        <Button 
          type="submit" 
          className="bg-trackflow-blue hover:bg-trackflow-blue/90" 
          disabled={isLoading}
        >
          {isLoading ? "Salvando..." : "Salvar alterações"}
        </Button>
        
        {isAdminMode && (
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-muted-foreground">
              As alterações realizadas em modo administrador são registradas no log do sistema.
            </p>
          </div>
        )}
      </form>
    </Form>
  );
};

export default UserUpdateForm;
