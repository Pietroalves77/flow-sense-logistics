
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Control } from "react-hook-form";

interface UserFormFieldsProps {
  control: Control<any>;
  isLoading: boolean;
  isAdminMode?: boolean;
  userId?: string;
  handleIdentifierChange: (value: string) => void;
  handleEmailChange: (value: string) => void;
}

const UserFormFields = ({
  control,
  isLoading,
  isAdminMode = false,
  userId,
  handleIdentifierChange,
  handleEmailChange,
}: UserFormFieldsProps) => {
  return (
    <div className="space-y-4">
      {/* Admin info box */}
      {isAdminMode && (
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
          <h3 className="font-medium text-trackflow-blue mb-2">Modo Administrador</h3>
          <p className="text-sm text-slate-600">
            Você está editando este usuário como administrador. Todas as alterações serão registradas.
          </p>
        </div>
      )}
      
      {/* User ID display for admin */}
      {isAdminMode && userId && (
        <div className="mb-4">
          <FormLabel>ID do Usuário</FormLabel>
          <div className="flex items-center mt-1">
            <div className="text-xs font-mono px-2 py-1 bg-slate-100 rounded border">
              {userId}
            </div>
          </div>
        </div>
      )}

      {/* Identifier field */}
      <FormField
        control={control}
        name="identifier"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Identifier (max. 12 caracteres)</FormLabel>
            <FormControl>
              <Input 
                placeholder="Insira o identifier" 
                value={field.value || ""}
                onChange={(e) => handleIdentifierChange(e.target.value)}
                disabled={!!control._formValues.email || isLoading}
                maxLength={12}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Email field */}
      <FormField
        control={control}
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
                disabled={!!control._formValues.identifier || isLoading}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Role field */}
      <FormField
        control={control}
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
        control={control}
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
    </div>
  );
};

export default UserFormFields;
