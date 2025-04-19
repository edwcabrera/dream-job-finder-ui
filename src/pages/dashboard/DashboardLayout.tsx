
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  User,
  Briefcase,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Panel Principal",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/dashboard",
    },
    {
      title: "Mi Perfil",
      icon: <User className="h-5 w-5" />,
      path: "/dashboard/perfil",
    },
    {
      title: "Mis Empleos",
      icon: <Briefcase className="h-5 w-5" />,
      path: "/dashboard/empleos",
    },
    {
      title: "Mensajes",
      icon: <MessageSquare className="h-5 w-5" />,
      path: "/dashboard/mensajes",
    },
    {
      title: "Notificaciones",
      icon: <Bell className="h-5 w-5" />,
      path: "/dashboard/notificaciones",
    },
    {
      title: "Configuración",
      icon: <Settings className="h-5 w-5" />,
      path: "/dashboard/configuracion",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-3 px-4 md:hidden">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-2">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 10h2v7H7z" />
              <path d="M14 10h2v7h-2z" />
              <path d="M10 15h3v2h-3z" />
              <path d="M10 10h3v2h-3z" />
            </svg>
            <span className="font-bold text-xl text-purple-600">Dream<span className="text-blue-600">Job</span></span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside 
          className={`bg-slate-900 text-white w-64 flex-shrink-0 md:sticky fixed top-0 h-full z-40 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "left-0" : "-left-64 md:left-0"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-slate-800">
              <Link to="/" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-2">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 10h2v7H7z" />
                  <path d="M14 10h2v7h-2z" />
                  <path d="M10 15h3v2h-3z" />
                  <path d="M10 10h3v2h-3z" />
                </svg>
                <span className="font-bold text-xl text-purple-400">Dream<span className="text-blue-400">Job</span></span>
              </Link>
            </div>

            <div className="p-4 border-b border-slate-800">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 mr-3 flex items-center justify-center">
                  <User className="h-5 w-5 text-slate-300" />
                </div>
                <div>
                  <div className="font-medium">Carlos Rodriguez</div>
                  <div className="text-sm text-slate-400">Desarrollador Web</div>
                </div>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-2">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-slate-800 transition-colors ${
                        location.pathname === item.path
                          ? "bg-blue-600 hover:bg-blue-700"
                          : ""
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.title}</span>
                      {location.pathname === item.path && (
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-slate-800">
              <Button
                variant="ghost"
                className="w-full flex items-center text-white hover:bg-slate-800 justify-start px-3"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        <main className="flex-1">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
