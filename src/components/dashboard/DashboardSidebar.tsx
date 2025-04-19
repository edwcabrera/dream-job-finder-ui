
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Briefcase,
  BookmarkCheck,
  MessageSquare,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      name: "Vista General",
      path: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Empleos Guardados",
      path: "/dashboard/guardados",
      icon: <BookmarkCheck className="h-5 w-5" />,
    },
    {
      name: "Aplicaciones",
      path: "/dashboard/aplicaciones",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      name: "Mensajes",
      path: "/dashboard/mensajes",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      name: "Notificaciones",
      path: "/dashboard/notificaciones",
      icon: <Bell className="h-5 w-5" />,
    },
    {
      name: "Configuración",
      path: "/dashboard/configuracion",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="w-full md:w-64 h-full bg-white border-r flex flex-col">
      <div className="p-6">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-job-blue-600">
            Empleo<span className="text-job-teal-600">Latino</span>
          </span>
        </Link>
      </div>

      <div className="px-3 py-2 flex-1">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={currentPath === item.path ? "secondary" : "ghost"}
                className={`w-full justify-start ${
                  currentPath === item.path
                    ? "bg-job-blue-50 text-job-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <div className="mb-4">
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100">
            <HelpCircle className="h-5 w-5 mr-3" />
            Ayuda y Soporte
          </Button>
        </div>
        <Button variant="outline" className="w-full justify-start">
          <LogOut className="h-5 w-5 mr-3" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
