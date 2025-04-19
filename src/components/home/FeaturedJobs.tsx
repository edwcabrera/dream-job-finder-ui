
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, MapPin, Building, Clock } from "lucide-react";

const featuredJobs = [
  {
    id: 101,
    title: "Senior React Developer",
    company: "TechFlow Inc.",
    location: "Ciudad de México",
    type: "Tiempo Completo",
    tags: ["React", "JavaScript", "Redux"],
    salary: "$60K - $85K",
    logo: "/placeholder.svg",
    new: true
  },
  {
    id: 102,
    title: "Senior React Developer",
    company: "Innovatech",
    location: "Buenos Aires",
    type: "Tiempo Completo",
    tags: ["React", "TypeScript", "Node"],
    salary: "$55K - $80K",
    logo: "/placeholder.svg",
    new: true
  },
  {
    id: 103,
    title: "Senior React Developer",
    company: "Digital Solutions",
    location: "Santiago, Remoto",
    type: "Tiempo Completo",
    tags: ["React", "NextJS", "API"],
    salary: "$65K - $90K",
    logo: "/placeholder.svg",
    new: true
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Empleos Destacados</h2>
          <Link to="/empleos" className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors">
            Explorar todos los empleos
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="job-card">
              <CardContent className="p-0">
                <div className="relative">
                  {job.new && (
                    <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-none">
                      ¡Nuevo!
                    </Badge>
                  )}
                  <div className="p-5">
                    <div className="flex items-start">
                      <div className="bg-secondary h-14 w-14 rounded-md flex items-center justify-center mr-4 flex-shrink-0">
                        <img src={job.logo} alt={job.company} className="h-8 w-8" />
                      </div>
                      <div className="flex-grow">
                        <Link to={`/empleos/${job.id}`} className="group">
                          <h3 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                        </Link>
                        <div className="text-foreground/90 font-medium mb-2">{job.company}</div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-secondary/60 text-foreground/80 border-secondary/80">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="text-primary font-medium">{job.salary}</div>
                      </div>
                    </div>
                  </div>
                  <div className="job-card-footer">
                    <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                      <Link to={`/empleos/${job.id}`}>Ver Detalles</Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
                      <BookmarkPlus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
