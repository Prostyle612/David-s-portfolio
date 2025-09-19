import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Svelte"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Java", "Express.js", "Flask", "Django", "GraphQL", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "SQL"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions", "Jest", "Cypress", "Webpack"]
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development", "PWA"]
  },
  {
    title: "Data & Analytics",
    skills: ["Python", "Pandas", "D3.js", "Chart.js", "Machine Learning", "Data Visualization"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with 
            to build modern, scalable applications.
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