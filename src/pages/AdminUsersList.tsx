
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCog, Search, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Mock user data
const mockUsers = [
  { id: "user-123", identifier: "admin123", email: null, role: "admin", is_active: true },
  { id: "user-456", identifier: null, email: "driver@example.com", role: "driver", is_active: true },
  { id: "user-789", identifier: "viewer55", email: null, role: "viewer", is_active: false },
  { id: "user-101", identifier: null, email: "editor@example.com", role: "editor", is_active: true },
];

const AdminUsersList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(user => {
    const searchValue = searchTerm.toLowerCase();
    return (
      (user.identifier && user.identifier.toLowerCase().includes(searchValue)) ||
      (user.email && user.email.toLowerCase().includes(searchValue)) ||
      user.role.toLowerCase().includes(searchValue)
    );
  });

  const handleEditUser = (userId: string) => {
    navigate(`/admin/users/edit/${userId}`);
  };

  const handleCreateUser = () => {
    // Navigate to user creation page
    toast.info("Funcionalidade de criação de usuário será implementada em breve");
  };

  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800 border-red-200";
      case "editor":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "viewer":
        return "bg-green-100 text-green-800 border-green-200";
      case "driver":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin: Usuários | Track Flow</title>
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
                Gerencie usuários, permissões e acessos do sistema
              </p>
            </div>
            <Button 
              className="mt-4 sm:mt-0 bg-trackflow-blue hover:bg-trackflow-blue/90"
              onClick={handleCreateUser}
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Novo Usuário
            </Button>
          </div>

          <Card>
            <CardHeader className="bg-gradient-to-r from-white to-blue-50">
              <CardTitle>Lista de Usuários</CardTitle>
              <CardDescription>
                Visualize e gerencie todos os usuários cadastrados no sistema
              </CardDescription>
              <div className="mt-4 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por identifier, email ou função..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Identificação</TableHead>
                      <TableHead>Função</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="h-24 text-center">
                          Nenhum usuário encontrado.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">
                            {user.identifier ? (
                              <span className="font-mono text-sm">{user.identifier}</span>
                            ) : (
                              <span className="text-sm">{user.email}</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={`${getRoleBadgeStyle(user.role)}`}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {user.is_active ? (
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                Ativo
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-gray-500">
                                Inativo
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditUser(user.id)}
                            >
                              <UserCog className="h-4 w-4 mr-1" /> Editar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default AdminUsersList;
