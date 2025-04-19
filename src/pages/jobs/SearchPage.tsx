
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import JobCard from "@/components/jobs/JobCard";
import SearchFilters from "@/components/jobs/SearchFilters";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";

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
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({});
  const [view, setView] = useState<"grid" | "list">("list");
  
  // Extract search params
  const initialQuery = searchParams.get("titulo") || "";
  const initialLocation = searchParams.get("ubicacion") || "";

  // Apply filters (in a real app, this would query an API with the filters)
  const filteredJobs = jobsData;

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Resultados de búsqueda</h1>
          {(initialQuery || initialLocation) && (
            <p className="text-gray-600 mb-6">
              {initialQuery && `Búsqueda: "${initialQuery}"`}
              {initialQuery && initialLocation && " - "}
              {initialLocation && `Ubicación: "${initialLocation}"`}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-4">
                <SearchFilters onFilter={setFilters} />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow p-4 mb-6">
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
                        <TabsTrigger value="list">Lista</TabsTrigger>
                        <TabsTrigger value="grid">Cuadrícula</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
              </div>
              
              {filteredJobs.length > 0 ? (
                <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <div className="flex items-center justify-center mb-4 text-yellow-500">
                    <AlertCircle className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
                  <p className="text-gray-600 mb-6">
                    No hemos encontrado ofertas que coincidan con tus criterios de búsqueda.
                    Intenta con otros términos o amplía tu búsqueda.
                  </p>
                  <Button variant="outline">Limpiar filtros</Button>
                </div>
              )}
              
              {filteredJobs.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm" className="bg-job-blue-50 text-job-blue-600">
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
