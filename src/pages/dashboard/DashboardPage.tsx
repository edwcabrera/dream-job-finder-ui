
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "./DashboardLayout";
import JobSuggestions from "@/components/dashboard/JobSuggestions";
import UserProfile from "@/components/dashboard/UserProfile";
import { Activity, BookmarkCheck, Send, Star } from "lucide-react";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
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
              <div className="p-3 bg-job-blue-100 rounded-full">
                <Activity className="h-6 w-6 text-job-blue-600" />
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
              <div className="p-3 bg-job-teal-100 rounded-full">
                <BookmarkCheck className="h-6 w-6 text-job-teal-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Última guardado: Hace 2 días</p>
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UserProfile />
        </div>
        <div>
          <JobSuggestions />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
