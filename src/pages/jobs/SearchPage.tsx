
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import JobCard from "@/components/jobs/JobCard";
import SearchFilters from "@/components/jobs/SearchFilters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid2X2, List, Search, MapPin, SlidersHorizontal } from "lucide-react";

// Mock job data
const jobsData = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    company: "TechnoLatino",
    location: "Ciudad de México, México",
    type: "Tiempo Completo",
    category: "Tecnología",
    salary: "$40,000 - $60,000 MXN",
    posted: "Hace 2 días",
    logo: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Analista de Marketing Digital",
    company: "InnovaGroup",
    location: "Bogotá, Colombia",
    type: "Tiempo Completo",
    category: "Marketing",
    salary: "5,000,000 - 7,000,000 COP",
    posted: "Hace 3 días",
    logo: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Representante de Atención al Cliente",
    company: "ServiciosPlus",
    location: "Lima, Perú",
    type: "Medio Tiempo",
    category: "Atención al Cliente",
    salary: "S/. 2,000 - S/. 3,000",
    posted: "Hace 1 día",
    logo: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Contador Senior",
    company: "FinanzasGlobal",
    location: "Buenos Aires, Argentina",
    type: "Tiempo Completo",
    category: "Finanzas",
    salary: "ARS 350,000 - 450,000",
    posted: "Hace 5 días",
    logo: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Ingeniero de Software Backend",
    company: "DataSystems",
    location: "Santiago, Chile",
    type: "Remoto",
    category: "Tecnología",
    salary: "$2,000,000 - $2,800,000 CLP",
    posted: "Hace 2 días",
    logo: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Diseñador UX/UI",
    company: "CreativeStudio",
    location: "Monterrey, México",
    type: "Tiempo Completo",
    category: "Diseño",
    salary: "$35,000 - $45,000 MXN",
    posted: "Hace 4 días",
    logo: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Gerente de Marketing",
    company: "GlobalBrands",
    location: "Ciudad de Panamá, Panamá",
    type: "Tiempo Completo",
    category: "Marketing",
    salary: "$3,000 - $4,500 USD",
    posted: "Hace 3 días",
    logo: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Arquitecto de Software",
    company: "SolucionesTech",
    location: "Quito, Ecuador",
    type: "Tiempo Completo",
    category: "Tecnología",
    salary: "$2,200 - $3,000 USD",
    posted: "Hace 1 semana",
    logo: "/placeholder.svg",
  },
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({});
  const [view, setView] = useState<"grid" | "list">("list");
  const [showFilters, setShowFilters] = useState(false);
  
  // Extract search params
  useEffect(() => {
    const initialTitle = searchParams.get("titulo") || "";
    const initialLocation = searchParams.get("ubicacion") || "";
    setJobTitle(initialTitle);
    setLocation(initialLocation);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams();
    if (jobTitle) newParams.set("titulo", jobTitle);
    if (location) newParams.set("ubicacion", location);
    setSearchParams(newParams);
  };

  // Apply filters (in a real app, this would query an API with the filters)
  const filteredJobs = jobsData;

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Encuentra Tu Próximo Empleo</h1>
          
          <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-2 mb-4">
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
      </div>
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {(jobTitle || location) && (
            <p className="text-gray-600 mb-6">
              {jobTitle && `Búsqueda: "${jobTitle}"`}
              {jobTitle && location && " - "}
              {location && `Ubicación: "${location}"`}
            </p>
          )}

          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className={`md:col-span-1 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="sticky top-4">
                <SearchFilters onFilter={setFilters} />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-gray-600">
                      {filteredJobs.length} ofertas de empleo encontradas
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 mr-2">Vista:</span>
                    <Tabs value={view} onValueChange={(value) => setView(value as "grid" | "list")}>
                      <TabsList>
                        <TabsTrigger value="list" className="flex items-center">
                          <List className="h-4 w-4 mr-1" />
                          Lista
                        </TabsTrigger>
                        <TabsTrigger value="grid" className="flex items-center">
                          <Grid2X2 className="h-4 w-4 mr-1" />
                          Cuadrícula
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
              </div>
              
              <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}>
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
              
              {filteredJobs.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
