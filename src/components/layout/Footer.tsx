
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-job-blue-500 mr-2">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 10h2v7H7z" />
                <path d="M14 10h2v7h-2z" />
                <path d="M10 15h3v2h-3z" />
                <path d="M10 10h3v2h-3z" />
              </svg>
              <span className="font-bold text-2xl text-purple-400">Dream<span className="text-blue-400">Job</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Encuentra tu trabajo ideal o el candidato perfecto con nuestra plataforma fácil de usar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Para Buscadores</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/empleos" className="text-gray-400 hover:text-white">Explorar Empleos</Link>
              </li>
              <li>
                <Link to="/alertas-empleo" className="text-gray-400 hover:text-white">Alertas de Empleo</Link>
              </li>
              <li>
                <Link to="/consejos-profesionales" className="text-gray-400 hover:text-white">Consejos Profesionales</Link>
              </li>
              <li>
                <Link to="/consejos-cv" className="text-gray-400 hover:text-white">Consejos para CV</Link>
              </li>
              <li>
                <Link to="/asistente-ai" className="text-gray-400 hover:text-white">Asistente IA</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Para Empleadores</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/publicar-empleo" className="text-gray-400 hover:text-white">Publicar un Empleo</Link>
              </li>
              <li>
                <Link to="/precios" className="text-gray-400 hover:text-white">Precios</Link>
              </li>
              <li>
                <Link to="/recursos" className="text-gray-400 hover:text-white">Recursos</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-white">Acerca de</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white">Contacto</Link>
              </li>
              <li>
                <Link to="/politicas-privacidad" className="text-gray-400 hover:text-white">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/mapa-sitio" className="text-gray-400 hover:text-white">Mapa del Sitio</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 DreamJob. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terminos" className="text-gray-500 hover:text-white text-sm">Términos</Link>
            <Link to="/privacidad" className="text-gray-500 hover:text-white text-sm">Privacidad</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
