
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground pt-12 pb-6 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 10h2v7H7z" />
                <path d="M14 10h2v7h-2z" />
                <path d="M10 15h3v2h-3z" />
                <path d="M10 10h3v2h-3z" />
              </svg>
              <span className="font-bold text-2xl text-job-purple-400">Empli<span className="text-job-blue-400">ka</span></span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Encuentra tu trabajo ideal o el candidato perfecto con nuestra plataforma fácil de usar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Para Buscadores</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/empleos" className="text-muted-foreground hover:text-foreground">Explorar Empleos</Link>
              </li>
              <li>
                <Link to="/alertas-empleo" className="text-muted-foreground hover:text-foreground">Alertas de Empleo</Link>
              </li>
              <li>
                <Link to="/consejos-profesionales" className="text-muted-foreground hover:text-foreground">Consejos Profesionales</Link>
              </li>
              <li>
                <Link to="/consejos-cv" className="text-muted-foreground hover:text-foreground">Consejos para CV</Link>
              </li>
              <li>
                <Link to="/asistente-ai" className="text-muted-foreground hover:text-foreground">Asistente IA</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Para Empleadores</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/publicar-empleo" className="text-muted-foreground hover:text-foreground">Publicar un Empleo</Link>
              </li>
              <li>
                <Link to="/precios" className="text-muted-foreground hover:text-foreground">Precios</Link>
              </li>
              <li>
                <Link to="/recursos" className="text-muted-foreground hover:text-foreground">Recursos</Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-nosotros" className="text-muted-foreground hover:text-foreground">Acerca de</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-foreground">Contacto</Link>
              </li>
              <li>
                <Link to="/politicas-privacidad" className="text-muted-foreground hover:text-foreground">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/mapa-sitio" className="text-muted-foreground hover:text-foreground">Mapa del Sitio</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 Emplika. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terminos" className="text-muted-foreground hover:text-foreground text-sm">Términos</Link>
            <Link to="/privacidad" className="text-muted-foreground hover:text-foreground text-sm">Privacidad</Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-foreground text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
