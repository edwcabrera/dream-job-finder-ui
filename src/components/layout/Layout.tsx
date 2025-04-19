
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col antialiased selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
