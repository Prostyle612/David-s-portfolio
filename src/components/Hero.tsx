import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Mechanical Engineer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I turn ideas into tangible projects through iterative design, Finite Element Analysis, and Rapid Prototyping.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto"
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Prostyle612" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/david-sgonzalez/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:davidsg2@uci.edu"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}