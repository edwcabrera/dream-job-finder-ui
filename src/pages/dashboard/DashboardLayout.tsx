
import { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="w-full md:w-64 h-auto md:h-screen md:sticky top-0">
        <DashboardSidebar />
      </div>
      <div className="flex-1 p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
