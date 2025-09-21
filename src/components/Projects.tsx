import { ProjectCard } from './ProjectCard';
import { ProjectData } from './ProjectDetail';


// Ensure BASE_URL ends with a single trailing slash so concatenations like
// `${base}images/topmri.png` produce "/David-s-portfolio/images/topmri.png"
const BASE = (() => {
  const b = import.meta.env.BASE_URL ?? '/'
  return b.endsWith('/') ? b : b + '/'
})()
export const projects: ProjectData[] = [
  {
    id: "medical-robotics",
    title: "Medical Robotics: MRI Stimulation",
    description: "Advanced MRI-compatible stimulation system for medical research applications.",
    image: BASE + 'images/isomri.png',
    technologies: ["SOLIDWORKS", "MATLAB", "Arduino", "C++", "3D Printing", "Finite Element Analysis"],
    liveUrl: "https://demo-medical-robotics.com",
    githubUrl: "https://github.com/alexchen/medical-robotics",
    longDescription: "Developed a sophisticated MRI-compatible stimulation system designed for medical research applications. This project involved extensive collaboration with medical professionals to create a device that could safely operate within the strong magnetic field environment of an MRI scanner while delivering precise stimulation patterns.",
    challenges: [
      "Designing components that are completely MRI-compatible (non-ferromagnetic materials only)",
      "Achieving precise positioning and timing within the confined MRI environment",
      "Ensuring patient safety while maintaining stimulation accuracy",
      "Integrating real-time feedback systems with MRI imaging protocols",
      "Managing electromagnetic interference between stimulation and imaging systems"
    ],
    solutions: [
      "Selected specialized non-ferromagnetic materials (titanium, PEEK, ceramics)",
      "Implemented custom control algorithms for precise positioning",
      "Developed comprehensive safety protocols and emergency stop mechanisms",
      "Created custom EMI shielding and grounding strategies",
      "Established iterative testing protocols with medical equipment"
    ],
    results: "Successfully delivered a fully functional MRI-compatible stimulation system that improved research accuracy by 40% and enabled new types of medical studies. The system has been adopted by three research institutions and contributed to multiple published papers.",
    duration: "8 months",
    teamSize: "4 engineers",
    role: "Lead Mechanical Engineer",
    gallery: ["/medical-robotics-1.jpg", "/medical-robotics-2.jpg", "/medical-robotics-3.jpg"],
    features: [
      "MRI-compatible materials and design",
      "Sub-millimeter positioning accuracy",
      "Real-time safety monitoring",
      "Custom control software interface",
      "Modular design for different applications",
      "Integration with hospital systems"
    ]
  },
  {
    id: "rocket-engine",
    title: "Bi-Liquid Rocket Engine",
    description: "High-performance bi-propellant rocket engine designed for small satellite applications.",
  image: BASE + 'images/injectorcad.png',
    technologies: ["ANSYS Fluent", "SOLIDWORKS", "LabVIEW", "MATLAB", "Additive Manufacturing", "CFD Analysis"],
    liveUrl: "https://demo-rocket-engine.com",
    githubUrl: "https://github.com/alexchen/rocket-engine",
    longDescription: "Designed and developed a bi-liquid rocket engine system optimized for small satellite propulsion. The project encompassed complete engine design from injector development through nozzle optimization, with extensive computational fluid dynamics analysis and experimental validation.",
    challenges: [
      "Achieving stable combustion with hypergolic propellants",
      "Designing efficient cooling systems for high-temperature operation",
      "Optimizing injector design for proper fuel mixing",
      "Managing thermal expansion and structural integrity",
      "Meeting strict weight and size constraints for satellite applications"
    ],
    solutions: [
      "Developed custom injector patterns using CFD optimization",
      "Implemented regenerative cooling with integrated cooling channels",
      "Created advanced thermal barrier coatings for critical components",
      "Used topology optimization for weight reduction while maintaining strength",
      "Established comprehensive testing protocols with safety measures"
    ],
    results: "Achieved 15% higher specific impulse than comparable engines while reducing weight by 25%. The engine successfully completed all qualification tests and is currently being evaluated for commercial satellite missions.",
    duration: "12 months",
    teamSize: "6 engineers",
    role: "Propulsion Systems Engineer",
    gallery: ["/rocket-engine-1.jpg", "/rocket-engine-2.jpg", "/rocket-engine-3.jpg"],
    features: [
      "Hypergolic bi-propellant design",
      "Regenerative cooling system",
      "Modular construction",
      "Advanced materials and coatings",
      "Integrated health monitoring",
      "Qualified for space applications"
    ]
  },

  {
    id: "KIWI Bot: Omni-Directional Drone",
    title: "KIWI Bot: Omni-Directional Drone",
    description: "Omni-directional drone uses OpenCV to identify objects in real time. Its controlled by a tilt-degree controller that measures the angle of your hand to move in any direction.",
    image: BASE + 'images/kiwibotcad.png',
    technologies: ["SOLIDWORKS", "Python", "ROS", "PID Control", "3D Printing", "Sensor Fusion"],
    liveUrl: "https://demo-omnidrone.com",
    githubUrl: "https://github.com/alexchen/omnidirectional-drone",
    longDescription: "Engineered an innovative omnidirectional drone capable of translational movement in any direction without requiring orientation changes. This breakthrough design enables unprecedented maneuverability for applications in confined spaces and precision operations.",
    challenges: [
      "Achieving stable flight with unconventional propulsion arrangement",
      "Developing control algorithms for omnidirectional movement",
      "Balancing power efficiency with maneuverability requirements",
      "Managing complex interactions between multiple thrust vectors",
      "Ensuring robust performance in various environmental conditions"
    ],
    solutions: [
      "Designed custom thrust vectoring system with 8 independently controlled motors",
      "Implemented advanced control algorithms using quaternion mathematics",
      "Developed custom flight controller software with real-time optimization",
      "Created comprehensive sensor fusion system for stable positioning",
      "Established rigorous testing protocols for safety and performance validation"
    ],
    results: "Successfully demonstrated omnidirectional flight capabilities with precision positioning within 2cm accuracy. The prototype has attracted interest from search-and-rescue organizations and industrial inspection companies for confined space operations.",
    duration: "10 months",
    teamSize: "5 engineers",
    role: "Systems Design Engineer",
    gallery: ["/drone-1.jpg", "/drone-2.jpg", "/drone-3.jpg"],
    features: [
      "8-motor thrust vectoring system",
      "Omnidirectional movement capability",
      "Advanced flight control algorithms",
      "Real-time position feedback",
      "Modular payload system",
      "Autonomous navigation features"
    ]
  },
  {
    id: "CG Envelope of Embraer 192 E2",
    title: "CG Envelope of Embraer 192 E2",
    description: "Wrote an algorithm to calculate the center of gravity envelope and stability boundaries of an Emrbaer 192 E2 aircraft using Matlab, ensuring compliance with aviation safety standards.",
    image: BASE + 'images/cgenv1.png',
    technologies: ["SOLIDWORKS", "Python", "ROS", "PID Control", "3D Printing", "Sensor Fusion"],
    liveUrl: "https://demo-omnidrone.com",
    githubUrl: "https://github.com/alexchen/omnidirectional-drone",
    longDescription: "Engineered an innovative omnidirectional drone capable of translational movement in any direction without requiring orientation changes. This breakthrough design enables unprecedented maneuverability for applications in confined spaces and precision operations.",
    challenges: [
      "Achieving stable flight with unconventional propulsion arrangement",
      "Developing control algorithms for omnidirectional movement",
      "Balancing power efficiency with maneuverability requirements",
      "Managing complex interactions between multiple thrust vectors",
      "Ensuring robust performance in various environmental conditions"
    ],
    solutions: [
      "Designed custom thrust vectoring system with 8 independently controlled motors",
      "Implemented advanced control algorithms using quaternion mathematics",
      "Developed custom flight controller software with real-time optimization",
      "Created comprehensive sensor fusion system for stable positioning",
      "Established rigorous testing protocols for safety and performance validation"
    ],
    results: "Successfully demonstrated omnidirectional flight capabilities with precision positioning within 2cm accuracy. The prototype has attracted interest from search-and-rescue organizations and industrial inspection companies for confined space operations.",
    duration: "10 months",
    teamSize: "5 engineers",
    role: "Systems Design Engineer",
    gallery: ["/drone-1.jpg", "/drone-2.jpg", "/drone-3.jpg"],
    features: [
      "8-motor thrust vectoring system",
      "Omnidirectional movement capability",
      "Advanced flight control algorithms",
      "Real-time position feedback",
      "Modular payload system",
      "Autonomous navigation features"
    ]
  },
  {
    id: "LITS: 6-axis Force-Torque Sensor",
    title: "LITS: 6-axis Force-Torque Sensor",
    description: "4-layer PCB that uses a wheatstone bridge configuration to measure resistances. The main computing power behind an interchangeable toolhead system.",
    image: BASE + 'images/litsc.png',
    technologies: ["SOLIDWORKS", "Python", "ROS", "PID Control", "3D Printing", "Sensor Fusion"],
    liveUrl: "https://demo-omnidrone.com",
    githubUrl: "https://github.com/alexchen/omnidirectional-drone",
    longDescription: "Engineered an innovative omnidirectional drone capable of translational movement in any direction without requiring orientation changes. This breakthrough design enables unprecedented maneuverability for applications in confined spaces and precision operations.",
    challenges: [
      "Achieving stable flight with unconventional propulsion arrangement",
      "Developing control algorithms for omnidirectional movement",
      "Balancing power efficiency with maneuverability requirements",
      "Managing complex interactions between multiple thrust vectors",
      "Ensuring robust performance in various environmental conditions"
    ],
    solutions: [
      "Designed custom thrust vectoring system with 8 independently controlled motors",
      "Implemented advanced control algorithms using quaternion mathematics",
      "Developed custom flight controller software with real-time optimization",
      "Created comprehensive sensor fusion system for stable positioning",
      "Established rigorous testing protocols for safety and performance validation"
    ],
    results: "Successfully demonstrated omnidirectional flight capabilities with precision positioning within 2cm accuracy. The prototype has attracted interest from search-and-rescue organizations and industrial inspection companies for confined space operations.",
    duration: "10 months",
    teamSize: "5 engineers",
    role: "Systems Design Engineer",
    gallery: ["/drone-1.jpg", "/drone-2.jpg", "/drone-3.jpg"],
    features: [
      "8-motor thrust vectoring system",
      "Omnidirectional movement capability",
      "Advanced flight control algorithms",
      "Real-time position feedback",
      "Modular payload system",
      "Autonomous navigation features"
    ]
  },
  {
    id: "LYRA: Cycloidal Actuated Robot Arm",
    title: "LYRA: Cycloidal Actuated Robot Arm",
    description: "A comprehensive data visualization dashboard for business analytics with interactive charts, real-time data processing, and customizable widgets for different metrics.",
    image: BASE + 'images/lyramain.png',
    technologies: ["SOLIDWORKS", "Python", "ROS", "PID Control", "3D Printing", "Sensor Fusion"],
    liveUrl: "https://demo-omnidrone.com",
    githubUrl: "https://github.com/alexchen/omnidirectional-drone",
    longDescription: "Engineered an innovative omnidirectional drone capable of translational movement in any direction without requiring orientation changes. This breakthrough design enables unprecedented maneuverability for applications in confined spaces and precision operations.",
    challenges: [
      "Achieving stable flight with unconventional propulsion arrangement",
      "Developing control algorithms for omnidirectional movement",
      "Balancing power efficiency with maneuverability requirements",
      "Managing complex interactions between multiple thrust vectors",
      "Ensuring robust performance in various environmental conditions"
    ],
    solutions: [
      "Designed custom thrust vectoring system with 8 independently controlled motors",
      "Implemented advanced control algorithms using quaternion mathematics",
      "Developed custom flight controller software with real-time optimization",
      "Created comprehensive sensor fusion system for stable positioning",
      "Established rigorous testing protocols for safety and performance validation"
    ],
    results: "Successfully demonstrated omnidirectional flight capabilities with precision positioning within 2cm accuracy. The prototype has attracted interest from search-and-rescue organizations and industrial inspection companies for confined space operations.",
    duration: "10 months",
    teamSize: "5 engineers",
    role: "Systems Design Engineer",
    gallery: ["/drone-1.jpg", "/drone-2.jpg", "/drone-3.jpg"],
    features: [
      "8-motor thrust vectoring system",
      "Omnidirectional movement capability",
      "Advanced flight control algorithms",
      "Real-time position feedback",
      "Modular payload system",
      "Autonomous navigation features"
    ]
  },
  {
    id: "Portable Compaction Device",
    title: "Portable Compaction Device",
    description: "Designed a trash compactor for use in dense urban enviornments. Led market oppurtunity research." ,
    image: BASE + 'images/feaplate.png',
    technologies: ["SOLIDWORKS", "Python", "ROS", "PID Control", "3D Printing", "Sensor Fusion"],
    liveUrl: "https://demo-omnidrone.com",
    githubUrl: "https://github.com/alexchen/omnidirectional-drone",
    longDescription: "Engineered an innovative omnidirectional drone capable of translational movement in any direction without requiring orientation changes. This breakthrough design enables unprecedented maneuverability for applications in confined spaces and precision operations.",
    challenges: [
      "Achieving stable flight with unconventional propulsion arrangement",
      "Developing control algorithms for omnidirectional movement",
      "Balancing power efficiency with maneuverability requirements",
      "Managing complex interactions between multiple thrust vectors",
      "Ensuring robust performance in various environmental conditions"
    ],
    solutions: [
      "Designed custom thrust vectoring system with 8 independently controlled motors",
      "Implemented advanced control algorithms using quaternion mathematics",
      "Developed custom flight controller software with real-time optimization",
      "Created comprehensive sensor fusion system for stable positioning",
      "Established rigorous testing protocols for safety and performance validation"
    ],
    results: "Successfully demonstrated omnidirectional flight capabilities with precision positioning within 2cm accuracy. The prototype has attracted interest from search-and-rescue organizations and industrial inspection companies for confined space operations.",
    duration: "10 months",
    teamSize: "5 engineers",
    role: "Systems Design Engineer",
    gallery: ["/drone-1.jpg", "/drone-2.jpg", "/drone-3.jpg"],
    features: [
      "8-motor thrust vectoring system",
      "Omnidirectional movement capability",
      "Advanced flight control algorithms",
      "Real-time position feedback",
      "Modular payload system",
      "Autonomous navigation features"
    ]
  },
  {
    id: "High-Accuracy Workbenches",
    title: "High-Accuracy Workbenches",
    description: "Highly dampened extrusion workbenches for vibration sensitive experiments." ,
    image: BASE + 'images/tablebig3.png',
    technologies: ["SOLIDWORKS", "Python", "ROS", "PID Control", "3D Printing", "Sensor Fusion"],
    liveUrl: "https://demo-omnidrone.com",
    githubUrl: "https://github.com/alexchen/omnidirectional-drone",
    longDescription: "Engineered an innovative omnidirectional drone capable of translational movement in any direction without requiring orientation changes. This breakthrough design enables unprecedented maneuverability for applications in confined spaces and precision operations.",
    challenges: [
      "Achieving stable flight with unconventional propulsion arrangement",
      "Developing control algorithms for omnidirectional movement",
      "Balancing power efficiency with maneuverability requirements",
      "Managing complex interactions between multiple thrust vectors",
      "Ensuring robust performance in various environmental conditions"
    ],
    solutions: [
      "Designed custom thrust vectoring system with 8 independently controlled motors",
      "Implemented advanced control algorithms using quaternion mathematics",
      "Developed custom flight controller software with real-time optimization",
      "Created comprehensive sensor fusion system for stable positioning",
      "Established rigorous testing protocols for safety and performance validation"
    ],
    results: "Successfully demonstrated omnidirectional flight capabilities with precision positioning within 2cm accuracy. The prototype has attracted interest from search-and-rescue organizations and industrial inspection companies for confined space operations.",
    duration: "10 months",
    teamSize: "5 engineers",
    role: "Systems Design Engineer",
    gallery: ["/drone-1.jpg", "/drone-2.jpg", "/drone-3.jpg"],
    features: [
      "8-motor thrust vectoring system",
      "Omnidirectional movement capability",
      "Advanced flight control algorithms",
      "Real-time position feedback",
      "Modular payload system",
      "Autonomous navigation features"
    ]
  }
];

interface ProjectsProps {
  onProjectClick?: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
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
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              onClick={() => onProjectClick?.(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}