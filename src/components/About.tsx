import { Card, CardContent } from './ui/card';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My dream is to work at the forefront of aerospace systems developement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-border/50">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                BS Mechanical Engineering<br />
                UC Berkeley 2024<br />
                MS Mechanical Engineering<br />
                UC Irvine 2027
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="mb-2">Experience</h3>
              <p className="text-sm text-muted-foreground">
                4+ Years<br />
                Component Design <br />
                FEA Analysis <br />
                Product Development
                
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="mb-2">Achievements</h3>
              <p className="text-sm text-muted-foreground">
                Solidworks Certified<br />
                Designed a bi-liquid Rocket<br />
                Climbed Mt.Tamalpais
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-center text-muted-foreground leading-relaxed">
           
          </p>
        </div>
      </div>
    </section>
  );
}