
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
}: JobCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start">
            <div className="bg-gray-100 h-14 w-14 rounded flex items-center justify-center mr-4 flex-shrink-0">
              <img src={logo} alt={company} className="h-8 w-8" />
            </div>
            <div className="flex-grow">
              <Link to={`/empleos/${id}`}>
                <h3 className="font-semibold text-lg mb-1 text-gray-900 hover:text-job-blue-600 transition-colors">
                  {title}
                </h3>
              </Link>
              <div className="text-gray-700 font-medium mb-2">{company}</div>
              
              <div className="flex flex-wrap gap-3 mb-3">
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {location}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Building className="h-4 w-4 mr-1" />
                  {category}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {posted}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-gray-100 text-gray-800">
                    {type}
                  </Badge>
                </div>
                <div className="text-job-blue-600 font-medium">{salary}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 flex justify-between items-center border-t">
          <Button asChild variant="default" size="sm">
            <Link to={`/empleos/${id}`}>Ver Detalles</Link>
          </Button>
          <Button variant="ghost" size="icon">
            <BookmarkPlus className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
