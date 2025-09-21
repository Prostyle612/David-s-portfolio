import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skillCategories = [
  {
    title: "Design Tools",
    skills: ["Solidworks", "AutoCAD", "Siemens NX", "Onshape","ANSYS Mechanical", "Solidworks FEA" ]
  },
  {
    title: "CS/EE",
    skills: ["Python", "Matlab", "Linux Mint", "Typescript", "Overleaf", "Git", "KiCAD", "Altium"]
  },
  {
    title: "Fabrication",
    skills: ["GD&T", "Mills", "Lathes", "CNC (3,5 axis)", "3D Printing", "Laser Cutting", "Soldering"]
  },

];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the tools I work with 
            to build the technology of tomorrow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}