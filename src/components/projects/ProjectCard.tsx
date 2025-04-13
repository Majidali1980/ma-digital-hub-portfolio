
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  liveUrl: string;
  category: string;
  index: number;
}

const ProjectCard = ({ title, imageUrl, liveUrl, category, index }: ProjectCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg border border-muted bg-card transition-all hover:border-ma-teal"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
      className="animate-fade-in"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight mb-2">
          {title}
        </h3>
        
        <div className="mt-4 flex justify-between items-center">
          <Button asChild variant="outline" size="sm">
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              Live Demo
              <ExternalLink size={14} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
