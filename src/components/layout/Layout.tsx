
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
