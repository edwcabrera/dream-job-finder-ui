
import { Search, Clock, Award, Sparkles } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-16 bg-job-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">¿Por qué usar EmpleoLatino?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Más que un portal de empleos, somos tu aliado para encontrar la oportunidad perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
              <Search className="h-8 w-8 text-job-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Búsqueda Inteligente</h3>
            <p className="text-gray-600">
              Nuestro sistema de búsqueda avanzado te ayuda a encontrar exactamente lo que estás buscando.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
              <Clock className="h-8 w-8 text-job-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Empleos Actualizados</h3>
            <p className="text-gray-600">
              Miles de nuevas ofertas de trabajo son publicadas diariamente en nuestra plataforma.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
              <Award className="h-8 w-8 text-job-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Empresas Verificadas</h3>
            <p className="text-gray-600">
              Trabajamos solo con empresas verificadas para garantizar oportunidades de calidad.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
              <Sparkles className="h-8 w-8 text-job-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Asistente de AI</h3>
            <p className="text-gray-600">
              Nuestro asistente de inteligencia artificial te ayuda a encontrar el trabajo perfecto para ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
