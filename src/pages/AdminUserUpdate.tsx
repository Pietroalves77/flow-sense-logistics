
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UserUpdateForm from "@/components/user/UserUpdateForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import { toast } from "sonner";
import { userService } from "@/services/userService";

const AdminUserUpdate = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(id || "");

  useEffect(() => {
    // If no ID is provided in the URL params, show error
    if (!id) {
      toast.error("ID do usuário não fornecido");
    } else {
      setUserId(id);
    }
  }, [id]);

  const handleUpdateSuccess = () => {
    toast.success("Usuário atualizado com sucesso");
    // Redirect to user list or stay on the same page with feedback
  };

  const handleBackToList = () => {
    navigate("/admin/users");
  };

  return (
    <>
      <Helmet>
        <title>Admin: Atualizar Usuário | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                <Users className="mr-2 h-6 w-6 text-trackflow-blue" /> 
                Administração de Usuários
              </h1>
              <p className="text-muted-foreground">
                Atualização de perfil e permissões do usuário
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleBackToList} 
              className="mt-4 sm:mt-0"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Lista
            </Button>
          </div>
          
          <Card className="max-w-2xl mx-auto border border-slate-200 shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-blue-50">
              <CardTitle className="text-trackflow-blue">Dados do Usuário</CardTitle>
              <CardDescription>
                Atualize as informações do usuário. Note que identifier e email são mutuamente exclusivos.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {userId ? (
                <UserUpdateForm 
                  userId={userId} 
                  onSuccess={handleUpdateSuccess}
                  isAdminMode={true}
                />
              ) : (
                <div className="text-center py-8 text-red-600">
                  Nenhum usuário selecionado. Por favor, selecione um usuário para editar.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default AdminUserUpdate;
