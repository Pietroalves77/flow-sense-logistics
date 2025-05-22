
import { User, UserUpdatePayload } from "../types/user";
import { toast } from "sonner";

// This is a mock service that would be replaced with actual API calls
export const userService = {
  getUser: async (userId: string): Promise<User> => {
    // Mock API call - replace with actual implementation
    console.log(`Fetching user with ID: ${userId}`);
    
    // Simulate API response delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data
    return {
      identifier: "user123",
      email: null,
      role: "editor",
      is_active: true,
    };
  },

  updateUser: async (userId: string, userData: UserUpdatePayload): Promise<boolean> => {
    console.log(`Updating user with ID: ${userId}`, userData);
    
    // Simulate API call and response delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Validate that either identifier or email is provided, not both
    if ((!userData.identifier && !userData.email) || 
        (userData.identifier && userData.email)) {
      toast.error("Você deve fornecer identifier OU email, não ambos ou nenhum.");
      return false;
    }
    
    // Simulate successful update
    toast.success("Usuário atualizado com sucesso!");
    return true;
  },
};
