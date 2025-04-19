
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { BookmarkPlus, MapPin, Building, Clock } from "lucide-react";

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
];

const RecentJobs = () => {
  const [activeTab, setActiveTab] = useState("todos");

  const filteredJobs = activeTab === "todos" 
    ? jobsData 
    : jobsData.filter(job => job.category.toLowerCase() === activeTab);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Ofertas de Empleo Recientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora las últimas ofertas laborales publicadas en nuestra plataforma
          </p>
        </div>

        <Tabs defaultValue="todos" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="tecnología">Tecnología</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="finanzas">Finanzas</TabsTrigger>
              <TabsTrigger value="diseño">Diseño</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Link to={`/empleos/${job.id}`} className="block p-6">
                      <div className="flex items-start">
                        <div className="bg-gray-100 h-14 w-14 rounded flex items-center justify-center mr-4 flex-shrink-0">
                          <img src={job.logo} alt={job.company} className="h-8 w-8" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg mb-1 text-gray-900">{job.title}</h3>
                          <div className="text-gray-700 font-medium mb-2">{job.company}</div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <div className="flex items-center text-gray-500 text-sm">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.posted}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-gray-100 text-gray-800">
                              {job.type}
                            </Badge>
                            <div className="text-job-blue-600 font-medium">{job.salary}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/empleos">Ver todos los empleos</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RecentJobs;
