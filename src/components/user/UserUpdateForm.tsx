
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, UserUpdatePayload } from "@/types/user";
import { userService } from "@/services/userService";
import { toast } from "sonner";

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface UserUpdateFormProps {
  userId: string;
  onSuccess?: () => void;
}

const UserUpdateForm = ({ userId, onSuccess }: UserUpdateFormProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [usePassword, setUsePassword] = useState(false);
  
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
        password: usePassword ? values.password : null,
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
        <div className="space-y-4">
          {/* Identifier field */}
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identifier (max. 12 caracteres)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Insira o identifier" 
                    value={field.value || ""}
                    onChange={(e) => handleIdentifierChange(e.target.value)}
                    disabled={!!form.getValues("email") || isLoading}
                    maxLength={12}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="usuario@exemplo.com" 
                    value={field.value || ""}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    disabled={!!form.getValues("identifier") || isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Role field */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Função</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma função" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                    <SelectItem value="driver">Driver</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Active status */}
          <FormField
            control={form.control}
            name="is_active"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Status</FormLabel>
                  <div className="text-sm text-muted-foreground">
                    Usuário está ativo no sistema
                  </div>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          {/* Password field with checkbox to enable/disable */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="usePassword" 
                checked={usePassword}
                onCheckedChange={(checked) => setUsePassword(!!checked)}
                disabled={isLoading}
              />
              <Label htmlFor="usePassword">Atualizar senha</Label>
            </div>
            
            {usePassword && (
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nova senha</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Insira a nova senha"
                        disabled={isLoading} 
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="bg-trackflow-blue hover:bg-trackflow-blue/90" 
          disabled={isLoading}
        >
          {isLoading ? "Salvando..." : "Salvar alterações"}
        </Button>
      </form>
    </Form>
  );
};

export default UserUpdateForm;
