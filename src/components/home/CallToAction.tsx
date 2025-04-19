
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Encontrar Tu Trabajo Ideal?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Únete a miles de profesionales que ya encontraron su empleo perfecto en nuestra plataforma.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/empleos">Buscar Empleos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link to="/publicar-empleo">Publicar un Empleo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
