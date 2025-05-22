
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UserUpdateForm from "@/components/user/UserUpdateForm";

const UserUpdate = () => {
  // In a real application, this would come from URL params or context
  const [userId] = useState("user-123");

  const handleUpdateSuccess = () => {
    console.log("User updated successfully");
    // Additional actions after successful update if needed
  };

  return (
    <>
      <Helmet>
        <title>Atualizar Usuário | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Atualizar Usuário</h1>
              <p className="text-muted-foreground">
                Atualize as informações de usuários existentes
              </p>
            </div>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Dados do Usuário</CardTitle>
              <CardDescription>
                Atualize as informações do usuário. Note que identifier e email são mutuamente exclusivos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UserUpdateForm userId={userId} onSuccess={handleUpdateSuccess} />
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default UserUpdate;
