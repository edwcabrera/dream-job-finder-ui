
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/empleos?titulo=${jobTitle}&ubicacion=${location}`);
  };

  return (
    <section className="relative bg-slate-900 text-white h-[80vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Encuentra Tu Trabajo Ideal Hoy
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Únete a miles de profesionales que encontraron su trabajo perfecto en DreamJob
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="¿Qué trabajo estás buscando?"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="search-input pl-10 w-full bg-white/10 text-white border-slate-700 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-5 relative">
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Ubicación (ciudad, país)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="search-input pl-10 w-full bg-white/10 text-white border-slate-700 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="search-button w-full bg-blue-600 hover:bg-blue-700">
                  Buscar
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Job Cards - Only on Desktop */}
        {isDesktop && (
          <div className="hidden md:flex justify-around mt-8">
            {jobCardData.map((card, index) => (
              <div 
                key={index}
                className="bg-white text-slate-900 rounded-lg shadow-lg p-4 max-w-[200px] transform transition-transform hover:-translate-y-2"
                style={{ 
                  transform: `rotate(${card.rotation}deg)`,
                  zIndex: 10 - index
                }}
              >
                <h3 className="font-bold text-sm">{card.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{card.company}</p>
                <div className="flex items-center text-xs text-gray-600">
                  <MapPin className="h-3 w-3 mr-1" />
                  {card.location}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-medium text-blue-600">{card.salary}</span>
                  <div className="flex">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <Star className="h-3 w-3 text-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial Cards - Only on Desktop */}
        {isDesktop && (
          <div className="absolute right-10 top-1/4 space-y-4 hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-[250px] text-sm">
              <div className="flex">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="my-2">Encontré mi trabajo soñado en solo 2 semanas</p>
              <p className="text-xs text-gray-400">― Miguel G.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-[250px] text-sm">
              <div className="flex">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="my-2">Mejor plataforma para encontrar empleos tecnológicos</p>
              <p className="text-xs text-gray-400">― Luciana M.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-[250px] text-sm">
              <div className="flex">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="my-2">Increíble variedad de empresas y posiciones</p>
              <p className="text-xs text-gray-400">― Carlos T.</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/30 z-0"></div>
    </section>
  );
};

// Sample job card data
const jobCardData = [
  {
    title: "Desarrollador Frontend",
    company: "TechByte S.A.",
    location: "Ciudad de México",
    salary: "$30K - $45K",
    rotation: -5
  },
  {
    title: "Product Manager",
    company: "InnoSoft",
    location: "Buenos Aires",
    salary: "$40K - $60K",
    rotation: 3
  },
  {
    title: "Diseñador UX/UI",
    company: "Studio Creativo",
    location: "Bogotá",
    salary: "$25K - $35K",
    rotation: -2
  }
];

export default HeroSection;
