import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";

// Pages
import Index from "./pages/Index";
import SearchPage from "./pages/jobs/SearchPage";
import JobDetailPage from "./pages/jobs/JobDetailPage";
import JobPostingPage from "./pages/jobs/JobPostingPage";
import BlogPage from "./pages/blog/BlogPage";
import ArticleDetailPage from "./pages/blog/ArticleDetailPage";
import AuthPage from "./pages/auth/AuthPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import AiAssistantPage from "./pages/ai-assistant/AiAssistantPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
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
            <Route path="/publicar-empleo" element={<JobPostingPage />} />
            
            {/* Blog */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<ArticleDetailPage />} />
            
            {/* Authentication */}
            <Route path="/iniciar-sesion" element={<AuthPage />} />
            <Route path="/registrarse" element={<AuthPage />} />
            <Route path="/recuperar-contrasena" element={<AuthPage />} />
            
            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/perfil" element={<ProfilePage />} />
            <Route path="/dashboard/:section" element={<DashboardPage />} />
            
            {/* Other Pages */}
            <Route path="/asistente-ai" element={<AiAssistantPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/sobre-nosotros" element={<ContactPage />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
