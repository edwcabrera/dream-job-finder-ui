
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border/40 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 10h2v7H7z" />
              <path d="M14 10h2v7h-2z" />
              <path d="M10 15h3v2h-3z" />
              <path d="M10 10h3v2h-3z" />
            </svg>
            <span className="font-bold text-2xl text-job-purple-400">Empli<span className="text-job-blue-400">ka</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium">
              Inicio
            </Link>
            <Link to="/empleos" className="text-foreground hover:text-primary font-medium">
              Explorar Empleos
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary font-medium">
              Blog
            </Link>
            <Link to="/sobre-nosotros" className="text-foreground hover:text-primary font-medium">
              Acerca de
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            <Button asChild variant="outline" className="font-medium">
              <Link to="/publicar-empleo">Publicar un Empleo</Link>
            </Button>
            
            <Button asChild className="bg-job-purple-600 hover:bg-job-purple-700 font-medium">
              <Link to="/iniciar-sesion">Iniciar sesión</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle className="mr-2" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-background text-foreground">
          <div className="flex flex-col space-y-3 pt-3">
            <Link
              to="/"
              className="py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/empleos"
              className="py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Explorar Empleos
            </Link>
            <Link
              to="/blog"
              className="py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/sobre-nosotros"
              className="py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <div className="border-t border-border my-2"></div>
            <Link
              to="/publicar-empleo"
              className="py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Publicar un Empleo
            </Link>
            <Link
              to="/iniciar-sesion"
              className="py-2 text-primary font-medium"
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
