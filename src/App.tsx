import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import SearchPage from "./pages/jobs/SearchPage";
import JobDetailPage from "./pages/jobs/JobDetailPage";
import BlogPage from "./pages/blog/BlogPage";
import ArticleDetailPage from "./pages/blog/ArticleDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AiAssistantPage from "./pages/ai/AiAssistantPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          
          {/* Jobs */}
          <Route path="/empleos" element={<SearchPage />} />
          <Route path="/empleos/:id" element={<JobDetailPage />} />
          <Route path="/buscar" element={<SearchPage />} />
          
          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticleDetailPage />} />
          
          {/* Authentication */}
          <Route path="/iniciar-sesion" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />
          
          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/:section" element={<DashboardPage />} />
          
          {/* Other Pages */}
          <Route path="/asistente-ai" element={<AiAssistantPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
