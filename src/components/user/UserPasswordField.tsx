
import { useState } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Control } from "react-hook-form";

interface UserPasswordFieldProps {
  control: Control<any>;
  isLoading: boolean;
}

const UserPasswordField = ({ control, isLoading }: UserPasswordFieldProps) => {
  const [usePassword, setUsePassword] = useState(false);
  
  return (
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
          control={control}
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
  );
};

export default UserPasswordField;
