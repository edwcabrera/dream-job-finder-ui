
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Calendar, Building, Star, Briefcase, Share2, BookmarkPlus } from "lucide-react";

interface JobDetailProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    category: string;
    salary: string;
    postedDate: string;
    logo: string;
    summary: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    aboutCompany: string;
    companyType: string;
  };
}

const JobDetail = ({ job }: JobDetailProps) => {
  const [rating, setRating] = useState(0);
  
  const handleRate = (value: number) => {
    setRating(value);
    toast({
      title: "¡Gracias por tu valoración!",
      description: `Has valorado esta oferta con ${value} estrellas.`,
    });
  };
  
  const handleSave = () => {
    toast({
      title: "Empleo guardado",
      description: "Este empleo ha sido guardado en tu lista.",
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Enlace copiado",
      description: "El enlace ha sido copiado al portapapeles.",
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-card rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center mb-6">
          <div className="mr-6 mb-4 md:mb-0">
            <div className="bg-secondary h-20 w-20 rounded-md flex items-center justify-center">
              <img src={job.logo} alt={job.company} className="h-12 w-12" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
            <div className="text-lg text-foreground/90 font-medium mb-2">{job.company}</div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Briefcase className="h-4 w-4 mr-1" />
                {job.type}
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Building className="h-4 w-4 mr-1" />
                {job.category}
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {job.postedDate}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg mb-6">
          <div className="font-semibold text-xl mb-1">Rango Salarial</div>
          <div className="text-primary font-bold text-2xl">{job.salary}</div>
        </div>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Resumen del Empleo</h2>
          <p className="text-foreground/90">{job.summary}</p>
        </section>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Descripción del Empleo</h2>
          <p className="text-foreground/90 mb-6">{job.description}</p>
          
          <h3 className="text-lg font-bold mb-3">Responsabilidades</h3>
          <ul className="list-disc pl-5 mb-6 text-foreground/90 space-y-1">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-bold mb-3">Requisitos</h3>
          <ul className="list-disc pl-5 mb-6 text-foreground/90 space-y-1">
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-bold mb-3">Beneficios</h3>
          <ul className="list-disc pl-5 text-foreground/90 space-y-1">
            {job.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Acerca de {job.company}</h2>
          <div className="flex items-start mb-4">
            <div className="bg-secondary h-14 w-14 rounded-md flex items-center justify-center mr-4">
              <img src={job.logo} alt={job.company} className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{job.company}</h3>
              <p className="text-muted-foreground text-sm">{job.companyType}</p>
            </div>
          </div>
          <p className="text-foreground/90 mb-4">{job.aboutCompany}</p>
          <Button asChild variant="outline" size="sm">
            <Link to="#" className="flex items-center">
              Ver Perfil de Empresa
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </Button>
        </section>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center">
            <span className="mr-3">Valorar este empleo:</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRate(star)}
                  className="focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1"
                >
                  <Star
                    className={`h-6 w-6 ${
                      rating >= star
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleShare} className="flex items-center">
              <Share2 className="h-4 w-4 mr-1" />
              Compartir
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave} className="flex items-center">
              <BookmarkPlus className="h-4 w-4 mr-1" />
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
