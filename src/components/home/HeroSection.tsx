
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/empleos?titulo=${jobTitle}&ubicacion=${location}`);
  };

  return (
    <section className="bg-gradient-to-r from-job-blue-600 to-job-teal-600 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Encuentra el trabajo de tus sueños
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Miles de ofertas laborales en toda Latinoamérica te están esperando
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="¿Qué trabajo estás buscando?"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="search-input pl-10 w-full"
                />
              </div>
              <div className="md:col-span-5 relative">
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Ubicación (ciudad, país)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="search-input pl-10 w-full"
                />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="search-button w-full">
                  Buscar
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Stats & Testimonial Cards - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-sm">Ofertas de trabajo activas</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold mb-2">5,000+</div>
            <div className="text-sm">Empresas en busca de talento</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-sm">Tasa de satisfacción de usuarios</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
