
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackgroundAnimation from "../ui/background-animation";
import AnimatedText from "../ui/animated-text";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <BackgroundAnimation />
        
        {/* Background animated elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-ma-teal/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-ma-dark-teal/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-ma-teal/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '1s' }}></div>

        {/* Additional animated elements for more visual interest */}
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-ma-teal/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '15s', animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-ma-dark-teal/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '20s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/2 w-36 h-36 bg-ma-teal/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '18s', animationDelay: '2.5s' }}></div>
             
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
