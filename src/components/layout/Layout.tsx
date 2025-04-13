
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TooltipProvider>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </TooltipProvider>
    </div>
  );
};

export default Layout;
