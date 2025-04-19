
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, MapPin, Building, Clock } from "lucide-react";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  posted: string;
  logo: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  type,
  category,
  salary,
  posted,
  logo,
  isNew,
  isFeatured
}: JobCardProps) => {
  return (
    <Card className="job-card">
      <CardContent className="p-0">
        <div className="p-5">
          <div className="flex items-start">
            <div className="bg-secondary h-14 w-14 rounded-md flex items-center justify-center mr-4 flex-shrink-0">
              <img src={logo} alt={company} className="h-8 w-8" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <Link to={`/empleos/${id}`} className="group">
                  <h3 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                </Link>
                <div className="flex gap-1">
                  {isNew && (
                    <Badge className="bg-job-blue-100 text-job-blue-800 dark:bg-job-blue-900/30 dark:text-job-blue-400 text-xs">
                      Nuevo
                    </Badge>
                  )}
                  {isFeatured && (
                    <Badge className="bg-job-purple-100 text-job-purple-800 dark:bg-job-purple-900/30 dark:text-job-purple-400 text-xs">
                      Destacado
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-foreground/90 font-medium mb-2">{company}</div>
              
              <div className="flex flex-wrap gap-3 mb-3">
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {location}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Building className="h-4 w-4 mr-1" />
                  {category}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {posted}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-muted-foreground/30 hover:bg-secondary/60">
                    {type}
                  </Badge>
                </div>
                <div className="text-primary font-medium">{salary}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="job-card-footer">
          <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
            <Link to={`/empleos/${id}`}>Ver Detalles</Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
            <BookmarkPlus className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
