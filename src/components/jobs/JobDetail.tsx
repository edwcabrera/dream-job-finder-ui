
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  MapPin,
  Building,
  Clock,
  Calendar,
  Briefcase,
  Globe,
  BookmarkPlus,
  Share2,
  Star,
  StarHalf,
  Mail,
  Send,
  FileText,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface JobDetailProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    category: string;
    salary: string;
    posted: string;
    logo: string;
    description: string;
    requirements: string[];
    benefits: string[];
    companyInfo: string;
  };
}

const JobDetail = ({ job }: JobDetailProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Tu solicitud ha sido enviada correctamente.",
    });
    setEmail("");
    setMessage("");
    setFile(null);
  };

  const handleRating = (rating: number) => {
    toast({
      title: "¡Gracias por calificar!",
      description: `Has calificado esta oferta con ${rating} estrellas.`,
    });
  };

  return (
    <div>
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center mb-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Volver
          </Button>

          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="bg-gray-100 h-20 w-20 rounded flex items-center justify-center mr-4 flex-shrink-0">
              <img src={job.logo} alt={job.company} className="h-12 w-12" />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">{job.title}</h1>
              <div className="text-lg text-gray-700 font-medium mb-2">{job.company}</div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Building className="h-5 w-5 mr-1" />
                  {job.category}
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-5 w-5 mr-1" />
                  {job.type}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-1" />
                  {job.posted}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="text-job-blue-600 border-job-blue-200 bg-job-blue-50 px-3 py-1">
                  {job.salary}
                </Badge>
                
                <div className="flex items-center">
                  <Button variant="outline" size="sm" className="flex gap-1">
                    <BookmarkPlus className="h-4 w-4" />
                    Guardar
                  </Button>
                </div>
                
                <div className="flex items-center">
                  <Button variant="outline" size="sm" className="flex gap-1">
                    <Share2 className="h-4 w-4" />
                    Compartir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Detalles</TabsTrigger>
                  <TabsTrigger value="company">Empresa</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Descripción del Puesto</h2>
                      <div className="text-gray-700 space-y-3">
                        <p>{job.description}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Requisitos</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Beneficios</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="company">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-3">Sobre {job.company}</h2>
                    <div className="text-gray-700">
                      <p>{job.companyInfo}</p>
                    </div>
                    
                    <div className="mt-4">
                      <Button asChild variant="outline">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Visitar Sitio Web
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">¿Qué te pareció esta oferta?</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => handleRating(1)}>
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleRating(2)}>
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleRating(3)}>
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleRating(4)}>
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleRating(5)}>
                  <Star className="h-5 w-5 text-yellow-400" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Aplicar a este empleo</h2>
                <form onSubmit={handleApply}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Tu correo electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Mensaje (opcional)
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Cuéntanos por qué eres ideal para este puesto..."
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Adjuntar CV
                      </label>
                      <div className="border border-dashed border-gray-300 rounded-lg px-3 py-4">
                        <label className="flex flex-col items-center justify-center cursor-pointer">
                          <FileText className="h-8 w-8 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">
                            {file ? file.name : "Subir tu CV (PDF, DOC)"}
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Solicitud
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-3">¿Preguntas o dudas?</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Contáctanos si necesitas más información sobre este empleo.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contacto" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contactar
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
