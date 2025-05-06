
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/projects/ProjectCard";

// Project data with categories
const projects = [
  // Web Development (Portfolio) Projects
  {
    id: 1,
    title: "Software Developer Portfolio",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/portfoliosoftwaredevveloper.png?raw=true",
    liveUrl: "https://radiant-online-self.vercel.app/",
    category: "portfolio"
  },
  {
    id: 2,
    title: "Creative Design Portfolio",
    imageUrl: "https://raw.githubusercontent.com/Majidali1980/lmages/refs/heads/main/portfolioCreativedevveloper.png",
    liveUrl: "https://idress.vercel.app/",
    category: "portfolio"
  },
  {
    id: 3,
    title: "Web Developer & Digital Craftsman",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/DevPortfolio..png?raw=true",
    liveUrl: "https://design-craft-webflow-flow.vercel.app/",
    category: "portfolio"
  },
  {
    id: 4,
    title: "Frontend Developer",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/frontend%20developer.png?raw=true",
    liveUrl: "https://developer-dock-dazzle.vercel.app/",
    category: "portfolio"
  },
  {
    id: 5,
    title: "Creative Designer",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/designer.png?raw=true",
    liveUrl: "https://design-canvas-flare.vercel.app/",
    category: "portfolio"
  },
  {
    id: 6,
    title: "ChromaStudio",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/ChromaStudio.png?raw=true",
    liveUrl: "https://chroma-freelance-studio.vercel.app/",
    category: "portfolio"
  },
  
  // YouTube Channel Projects
  {
    id: 7,
    title: "TastyTubeTreats",
    imageUrl: "https://via.placeholder.com/600x400/222/fff?text=TastyTubeTreats",
    liveUrl: "https://tasty-tube-treats.vercel.app/",
    category: "youtube"
  },
  {
    id: 8,
    title: "GreenScreen TV",
    imageUrl: "https://via.placeholder.com/600x400/222/fff?text=GreenScreen+TV",
    liveUrl: "https://channelview-gateway.vercel.app/",
    category: "youtube"
  },
  {
    id: 9,
    title: "VlogLife",
    imageUrl: "https://via.placeholder.com/600x400/222/fff?text=VlogLife",
    liveUrl: "https://vlog-landingpage.vercel.app/",
    category: "youtube"
  },
  
  // E-commerce Projects
  {
    id: 10,
    title: "M.A. Foods",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/M.A.%20Foods.png?raw=true",
    liveUrl: "https://kabab-kingdom.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 11,
    title: "QuickShop",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/QuickShop.png?raw=true",
    liveUrl: "https://quickshop-catalog-cart.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 12,
    title: "Serene Touch",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/Serene%20Touch.png?raw=true",
    liveUrl: "https://serene-touch-appointments.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 13,
    title: "ShopSupreme",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/ShopSupreme.png?raw=true",
    liveUrl: "https://shop-supreme.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 14,
    title: "VELORA",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/VELORA.png?raw=true",
    liveUrl: "https://velora-perfume-paradise.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 15,
    title: "MA Tailor",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/MA%20Tailorw.png?raw=true",
    liveUrl: "https://stitch-swirl.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 16,
    title: "PakEats",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/PakEats.png?raw=true",
    liveUrl: "https://pak-eats-online.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 17,
    title: "WooStore",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/WooStore.png?raw=true",
    liveUrl: "https://woocommerce-wonderland-86.vercel.app/",
    category: "ecommerce"
  },
  {
    id: 18,
    title: "MA Jewellery",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/MA%20Jewellery.png?raw=true",
    liveUrl: "https://jewellery-hub.vercel.app/",
    category: "ecommerce"
  },
  
  // Web Applications
  {
    id: 19,
    title: "FitTrack",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/FitTrack.png?raw=true",
    liveUrl: "https://fitnesstracker-mocha.vercel.app/",
    category: "application"
  },
  {
    id: 20,
    title: "RoadTrip Navigator",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/RoadTrip.png?raw=true",
    liveUrl: "https://roadtrip-navigator-rentals-7117f825.vercel.app/",
    category: "application"
  },
  {
    id: 21,
    title: "CarCruise",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/CarCruise.png?raw=true",
    liveUrl: "https://car-cruise-rental-web.vercel.app/",
    category: "application"
  },
  {
    id: 22,
    title: "DreamCanvas",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/DreamCanvas.png?raw=true",
    liveUrl: "https://vivid-pixel-dreams-forge.vercel.app/",
    category: "application"
  },
  {
    id: 23,
    title: "Build Your Professional Resume",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/Professional%20Resume.png?raw=true",
    liveUrl: "https://resume-adsense-craft.vercel.app/home",
    category: "application"
  },
  {
    id: 24,
    title: "Sleek Bill Craft",
    imageUrl: "https://github.com/Majidali1980/lmages/blob/main/Sleek%20Bill%20Craft.png?raw=true",
    liveUrl: "https://invoicegenerator-mu.vercel.app/",
    category: "application"
  },
  
  // Graphic Designing Projects
  {
    id: 25,
    title: "Hotel Website Thumbnail",
    imageUrl: "https://i.postimg.cc/13dPmVTv/Yelllow-and-Blue-Modern-Geometric-How-To-Design-Youtube-Thumbnail.png",
    liveUrl: "#",
    category: "graphic"
  },
  {
    id: 26,
    title: "Hotel Visiting Card",
    imageUrl: "https://i.postimg.cc/WbbP07c9/spoon.png",
    liveUrl: "#",
    category: "graphic"
  },
  {
    id: 27,
    title: "Digital Photography",
    imageUrl: "https://i.postimg.cc/SK8v8nTQ/1-8.png",
    liveUrl: "https://photographer-portfolio-silk.vercel.app/",
    category: "graphic"
  },
  {
    id: 28,
    title: "Travel Youtube Thumbnail",
    imageUrl: "https://i.postimg.cc/FHw67yxn/Green-Simple-Polaroid-Photo-Frame-Travel-Youtube-Thumbnail.png",
    liveUrl: "#",
    category: "graphic"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <Layout>
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            title="My Projects"
            subtitle="Browse through my portfolio of web development projects"
          />
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-muted">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolios</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="youtube">YouTube</TabsTrigger>
                <TabsTrigger value="application">Applications</TabsTrigger>
                <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    category={
                      project.category === "portfolio" ? "Portfolio" :
                      project.category === "ecommerce" ? "E-commerce" :
                      project.category === "youtube" ? "YouTube" :
                      project.category === "graphic" ? "Graphic Design" :
                      "Application"
                    }
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="portfolio" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    category="Portfolio"
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    category="E-commerce"
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="youtube" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    category="YouTube"
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="application" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    category="Application"
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="graphic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    category="Graphic Design"
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
