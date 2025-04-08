
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, any login will succeed
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo de volta ao TrackFlow.",
      });
      
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Login | Track Flow</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <header className="border-b py-4 px-4 lg:px-6">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-md text-white">
                <span className="font-bold">TF</span>
              </div>
              <span className="text-xl font-bold text-trackflow-blue">
                Track<span className="text-trackflow-teal">Flow</span>
              </span>
            </Link>
          </div>
        </header>
        
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-md border p-8">
              <div className="flex justify-center mb-6">
                <div className="gradient-bg flex h-12 w-12 items-center justify-center rounded-md text-white">
                  <LogIn className="h-6 w-6" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-center mb-6">Faça login na sua conta</h1>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm font-medium">Senha</label>
                    <a href="#" className="text-sm text-trackflow-blue hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm">
                    Lembrar-me por 30 dias
                  </label>
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Autenticando..." : "Entrar"}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Link to="/signup" className="text-trackflow-blue hover:underline">
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Ao fazer login, você concorda com nossos{" "}
              <a href="#" className="text-trackflow-blue hover:underline">
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a href="#" className="text-trackflow-blue hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
