
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "./DashboardLayout";
import JobSuggestions from "@/components/dashboard/JobSuggestions";
import { 
  Activity, 
  BookmarkCheck, 
  Send, 
  Star,
  BriefcaseBusiness,
  Eye,
  Clock,
  CalendarClock
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Panel Principal</h1>
        <p className="text-gray-600">Bienvenido de nuevo, Carlos</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Vistas de Perfil</p>
                <p className="text-2xl font-semibold">124</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 12% desde el mes pasado</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Empleos Guardados</p>
                <p className="text-2xl font-semibold">8</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-full">
                <BookmarkCheck className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Último guardado: Hace 2 días</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Aplicaciones Enviadas</p>
                <p className="text-2xl font-semibold">12</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Send className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">4 en revisión, 2 entrevistas</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Match Promedio</p>
                <p className="text-2xl font-semibold">86%</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 3% desde la última actualización</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Mis Aplicaciones Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentApplications.map((application, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className="bg-white h-10 w-10 rounded-md border flex items-center justify-center mr-3">
                        <img src={application.companyLogo} alt={application.company} className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">{application.title}</h3>
                        <p className="text-sm text-gray-600">{application.company}</p>
                      </div>
                    </div>
                    <Badge 
                      className={
                        application.status === "Entrevista" ? "bg-green-100 text-green-800 border-green-200" :
                        application.status === "Revisión" ? "bg-blue-100 text-blue-800 border-blue-200" :
                        "bg-gray-100 text-gray-800 border-gray-200"
                      }
                    >
                      {application.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Aplicado {application.appliedDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarClock className="h-4 w-4 mr-1" />
                      {application.statusUpdate}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/dashboard/aplicaciones/${application.id}`}>Ver Detalles</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link to="/dashboard/aplicaciones">Ver todas las aplicaciones</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Completar Perfil</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Perfil Personal</span>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Experiencia Laboral</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Educación</span>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Habilidades</span>
                  <span className="text-sm text-gray-500">50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Referencias</span>
                  <span className="text-sm text-gray-500">0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
              
              <div className="pt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/dashboard/perfil">Completar Perfil</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Próximas Entrevistas</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingInterviews.length > 0 ? (
                <div className="space-y-4">
                  {upcomingInterviews.map((interview, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center min-w-[60px] mr-4">
                        <div className="text-sm font-bold">{interview.date.day}</div>
                        <div className="text-xs">{interview.date.month}</div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{interview.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{interview.company}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {interview.time}
                          </div>
                          <div className="flex items-center">
                            <BriefcaseBusiness className="h-4 w-4 mr-1" />
                            {interview.type}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Prepararse</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BriefcaseBusiness className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No hay entrevistas programadas</h3>
                  <p className="text-gray-500 mb-4">Aplica a más empleos para conseguir entrevistas</p>
                  <Button asChild>
                    <Link to="/empleos">Explorar Empleos</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <JobSuggestions />
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sample data
const recentApplications = [
  {
    id: 1,
    title: "Desarrollador Frontend Senior",
    company: "TechFlow Inc.",
    companyLogo: "/placeholder.svg",
    status: "Entrevista",
    appliedDate: "hace 3 días",
    statusUpdate: "Entrevista programada para mañana, 10:00 AM"
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "CreativeStudios",
    companyLogo: "/placeholder.svg",
    status: "Revisión",
    appliedDate: "hace 5 días",
    statusUpdate: "Tu aplicación está siendo revisada"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovaTech",
    companyLogo: "/placeholder.svg",
    status: "Aplicado",
    appliedDate: "hace 1 semana",
    statusUpdate: "Esperando respuesta del reclutador"
  }
];

const upcomingInterviews = [
  {
    title: "Desarrollador Frontend Senior",
    company: "TechFlow Inc.",
    date: {
      day: "25",
      month: "Abr"
    },
    time: "10:00 AM - 11:30 AM",
    type: "Entrevista Técnica (Video)"
  },
  {
    title: "UX/UI Designer",
    company: "CreativeStudios",
    date: {
      day: "28",
      month: "Abr"
    },
    time: "2:00 PM - 3:00 PM",
    type: "Entrevista Inicial (Teléfono)"
  }
];

export default DashboardPage;
