
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Bell, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-job-blue-500 mr-2">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 10h2v7H7z" />
              <path d="M14 10h2v7h-2z" />
              <path d="M10 15h3v2h-3z" />
              <path d="M10 10h3v2h-3z" />
            </svg>
            <span className="font-bold text-2xl text-purple-400">Dream<span className="text-blue-400">Job</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 font-medium">
              Inicio
            </Link>
            <Link to="/empleos" className="text-white hover:text-blue-400 font-medium">
              Explorar Empleos
            </Link>
            <Link to="/blog" className="text-white hover:text-blue-400 font-medium">
              Blog
            </Link>
            <Link to="/sobre-nosotros" className="text-white hover:text-blue-400 font-medium">
              Acerca de
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full text-white">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Button asChild variant="outline" className="font-medium bg-opacity-20 text-white border-blue-400 hover:bg-blue-800">
              <Link to="/publicar-empleo">Publicar un Empleo</Link>
            </Button>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700 font-medium">
              <Link to="/iniciar-sesion">Iniciar sesión</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full text-white">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-slate-900 text-white">
          <div className="flex flex-col space-y-3 pt-3">
            <Link
              to="/"
              className="py-2 text-white hover:text-blue-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/empleos"
              className="py-2 text-white hover:text-blue-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Explorar Empleos
            </Link>
            <Link
              to="/blog"
              className="py-2 text-white hover:text-blue-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/sobre-nosotros"
              className="py-2 text-white hover:text-blue-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <div className="border-t border-gray-700 my-2"></div>
            <Link
              to="/publicar-empleo"
              className="py-2 text-white hover:text-blue-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Publicar un Empleo
            </Link>
            <Link
              to="/iniciar-sesion"
              className="py-2 text-blue-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
