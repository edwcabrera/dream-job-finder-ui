
import { Zap, Globe, Clock } from "lucide-react";

const PlatformBenefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">¿Por Qué Elegir Nuestra Plataforma?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos dedicados a hacer que tu experiencia de búsqueda de empleo sea memorable y exitosa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rápido y Eficiente</h3>
            <p className="text-gray-600">
              Nuestra plataforma utiliza tecnología avanzada para encontrar oportunidades de trabajo relevantes en segundos, ahorrándote tiempo y esfuerzo.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Oportunidades Globales</h3>
            <p className="text-gray-600">
              Accede a miles de ofertas de empleo de empresas líderes de todo el mundo con nuevas posiciones añadidas diariamente.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Actualizaciones en Tiempo Real</h3>
            <p className="text-gray-600">
              Recibe notificaciones y alertas en tiempo real sobre empleos y aplicaciones cuando cambian para mantener tus preferencias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformBenefits;
