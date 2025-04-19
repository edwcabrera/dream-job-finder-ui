
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowUpRight, Buildings, MapPin, Star } from "lucide-react";

// Mock job suggestions data
const jobSuggestions = [
  {
    id: 101,
    title: "Desarrollador React Senior",
    company: "TechSolutions",
    location: "Ciudad de México, México",
    salary: "$45,000 - $55,000 MXN",
    matchScore: 95,
    logo: "/placeholder.svg",
  },
  {
    id: 102,
    title: "Ingeniero Full Stack",
    company: "InnovaSoft",
    location: "Remoto",
    salary: "$40,000 - $50,000 MXN",
    matchScore: 90,
    logo: "/placeholder.svg",
  },
  {
    id: 103,
    title: "Desarrollador Front-End",
    company: "CodeMasters",
    location: "Guadalajara, México",
    salary: "$35,000 - $45,000 MXN",
    matchScore: 85,
    logo: "/placeholder.svg",
  },
];

const JobSuggestions = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Empleos Recomendados</CardTitle>
        <Button asChild variant="ghost" size="sm" className="text-job-blue-600">
          <Link to="/empleos" className="flex items-center gap-1">
            Ver más
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobSuggestions.map((job) => (
            <div key={job.id} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-gray-100 h-12 w-12 rounded flex items-center justify-center mr-4 flex-shrink-0">
                <img src={job.logo} alt={job.company} className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <Link to={`/empleos/${job.id}`}>
                  <h3 className="font-medium hover:text-job-blue-600 transition-colors">{job.title}</h3>
                </Link>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Buildings className="h-3.5 w-3.5 mr-1" />
                  {job.company}
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium text-job-blue-600">{job.salary}</span>
                  <Badge className="bg-green-100 text-green-800 border-none">
                    <Star className="fill-yellow-400 text-yellow-400 h-3 w-3 mr-1" />
                    {job.matchScore}% Match
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobSuggestions;
