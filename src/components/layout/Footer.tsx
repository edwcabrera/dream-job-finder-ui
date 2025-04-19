
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">EmpleoLatino</h3>
            <p className="text-gray-300 mb-4">
              Conectando talento con oportunidades en toda Latinoamérica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/empleos" className="text-gray-300 hover:text-white">
                  Buscar Empleos
                </Link>
              </li>
              <li>
                <Link to="/empresas" className="text-gray-300 hover:text-white">
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/asistente-ai" className="text-gray-300 hover:text-white">
                  Asistente AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guias" className="text-gray-300 hover:text-white">
                  Guías de Carrera
                </Link>
              </li>
              <li>
                <Link to="/consejos" className="text-gray-300 hover:text-white">
                  Consejos para CV
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/soporte" className="text-gray-300 hover:text-white">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-300 mb-2">
              <Mail size={16} className="inline-block mr-2" />
              contacto@empleolatino.com
            </p>
            <p className="text-gray-300">
              ¿Tienes alguna pregunta o sugerencia? No dudes en contactarnos.
            </p>
            <Link
              to="/contacto"
              className="inline-block mt-3 text-job-blue-400 hover:text-job-blue-300"
            >
              Ir a Contacto
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>© 2025 EmpleoLatino. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/terminos" className="hover:text-white">
                Términos de Servicio
              </Link>
              <Link to="/privacidad" className="hover:text-white">
                Política de Privacidad
              </Link>
              <Link to="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
