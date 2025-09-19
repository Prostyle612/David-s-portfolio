import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Medical Robotics: MRI Stimulation",
    description: "The challenge was to create a robot that could be used in a setting where metal isnt allowed in order to stimulate the brain during imaging. We did just that using itertative design and thorough systems testing.",
    image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTgyMzM2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Solidworks", "AutoDESK Fusion", "Solidworks FEA", "Python", "Excel"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/alexchen/ecommerce-platform"
  },
  {
    title: "Bi-Liquid Rocket Engine",
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and advanced filtering options.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTgxMzk0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Solidworks", "ANSYS", "Cryogenics", "PT Sensors", "Matlab"],
    liveUrl: "https://task-manager-demo.com",
    githubUrl: "https://github.com/alexchen/task-manager"
  },
  {
    title: "Omni-Directional Drone",
    description: "A comprehensive data visualization dashboard for business analytics with interactive charts, real-time data processing, and customizable widgets for different metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Solidworks", "3D Printing", "Ubuntu"],
    liveUrl: "https://analytics-dashboard-demo.com",
    githubUrl: "https://github.com/alexchen/analytics-dashboard"
  },
  {
    title: "CG Envelope of Embraer 192 E2",
    description: "A comprehensive data visualization dashboard for business analytics with interactive charts, real-time data processing, and customizable widgets for different metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Python", "Matlab"],
    liveUrl: "https://analytics-dashboard-demo.com",
    githubUrl: "https://github.com/alexchen/analytics-dashboard"
  },
  {
    title: "LITS: 6-axis Force Torque Sensor",
    description: "A comprehensive data visualization dashboard for business analytics with interactive charts, real-time data processing, and customizable widgets for different metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["KiCAD", "Excel", "Solidworks"],
    liveUrl: "https://analytics-dashboard-demo.com",
    githubUrl: "https://github.com/alexchen/analytics-dashboard"
  },
  {
    title: "LYRA: Cycloidal Actuated Robot Arm",
    description: "A comprehensive data visualization dashboard for business analytics with interactive charts, real-time data processing, and customizable widgets for different metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Solidworks", "Solidworks FEA", "3D printing", "Ubuntu" ],
    liveUrl: "https://analytics-dashboard-demo.com",
    githubUrl: "https://github.com/alexchen/analytics-dashboard"
  }
];
export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that demonstrate my technical skills 
            and problem-solving abilities across different domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}