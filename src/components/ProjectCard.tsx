import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  onClick?: () => void;
}

export function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl, onClick }: ProjectCardProps) {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking external links
  };

  return (
    <Card 
      className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{technologies.length - 4} more
            </Badge>
          )}
        </div>
        
        <div className="flex flex-col gap-3">
          <Button className="w-full" onClick={onClick}>
            View Details
            <ArrowRight size={14} className="ml-2" />
          </Button>
          
          <div className="flex gap-2">
            {liveUrl && (
              <Button variant="outline" size="sm" asChild className="flex-1" onClick={handleLinkClick}>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={12} className="mr-1" />
                  Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" size="sm" asChild className="flex-1" onClick={handleLinkClick}>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={12} className="mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}