import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
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
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} className="mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}