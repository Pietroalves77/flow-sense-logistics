
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Páginas do menu lateral
import LiveMap from "./pages/LiveMap";
import DeliveriesPage from "./pages/DeliveriesPage";
import RoutePlanner from "./pages/RoutePlanner";
import Analytics from "./pages/Analytics";
import History from "./pages/History";
import NotificationsPage from "./pages/NotificationsPage";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

// Páginas da empresa
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";

// Páginas do produto
import FeaturesPage from "./pages/product/FeaturesPage";
import PricingPage from "./pages/product/PricingPage";

// Outras páginas
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Páginas principais */}
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Páginas do menu lateral */}
            <Route path="/live-map" element={<LiveMap />} />
            <Route path="/deliveries" element={<DeliveriesPage />} />
            <Route path="/route-planner" element={<RoutePlanner />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/history" element={<History />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />

            {/* Páginas da empresa */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />

            {/* Páginas do produto */}
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            
            {/* Autenticação */}
            <Route path="/login" element={<Login />} />
            
            {/* Página 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
