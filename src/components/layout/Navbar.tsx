
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Bell, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-job-blue-600">Empleo<span className="text-job-teal-600">Latino</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/empleos" className="text-gray-700 hover:text-job-blue-600 font-medium">
              Empleos
            </Link>
            <Link to="/empresas" className="text-gray-700 hover:text-job-blue-600 font-medium">
              Empresas
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-job-blue-600 font-medium">
              Blog
            </Link>
            <Link to="/asistente-ai" className="text-gray-700 hover:text-job-blue-600 font-medium">
              Asistente AI
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/buscar">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>No tienes notificaciones</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="border-l h-6 border-gray-200 mx-2"></div>
            
            <Button asChild variant="outline" className="font-medium">
              <Link to="/iniciar-sesion">Iniciar sesión</Link>
            </Button>
            
            <Button asChild className="bg-job-blue-600 hover:bg-job-blue-700 font-medium">
              <Link to="/registrarse">Registrarse</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <div className="flex flex-col space-y-3">
            <Link
              to="/empleos"
              className="py-2 text-gray-700 hover:text-job-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Empleos
            </Link>
            <Link
              to="/empresas"
              className="py-2 text-gray-700 hover:text-job-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Empresas
            </Link>
            <Link
              to="/blog"
              className="py-2 text-gray-700 hover:text-job-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/asistente-ai"
              className="py-2 text-gray-700 hover:text-job-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Asistente AI
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link
              to="/iniciar-sesion"
              className="py-2 text-gray-700 hover:text-job-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar sesión
            </Link>
            <Link
              to="/registrarse"
              className="py-2 text-job-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
