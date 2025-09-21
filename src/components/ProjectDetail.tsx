import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  // Extended data for detail page
  longDescription: string;
  challenges: string[];
  solutions: string[];
  results: string;
  duration: string;
  teamSize: string;
  role: string;
  gallery: string[];
  features: string[];
}

interface ProjectDetailProps {
  project: ProjectData;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button 
            onClick={onBack}
            variant="ghost" 
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  <span>{project.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Target size={16} />
                  <span>{project.role}</span>
                </div>
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <ImageWithFallback 
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <p className="text-sm">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-medium mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <ImageWithFallback 
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Solutions</h3>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                    • {solution}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-4">Results & Impact</h3>
            <p className="text-muted-foreground leading-relaxed">{project.results}</p>
          </CardContent>
        </Card>

        {/* Back to top */}
        <div className="text-center">
          <Button onClick={onBack} variant="outline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}