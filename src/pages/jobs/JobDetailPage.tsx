
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { 
  ChevronLeft, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Star, 
  Share2, 
  BookmarkPlus, 
  Building,
  ArrowUpRight
} from "lucide-react";

// Mock job data
const jobDetails = {
  id: 101,
  title: "Senior Frontend Developer",
  company: "TechNova",
  logo: "/placeholder.svg",
  location: "Santo Domingo",
  type: "Tiempo Completo",
  category: "Tech",
  postedDate: "15 de Abril, 2025",
  salary: "$60,000 - $80,000",
  summary: "Únete a nuestro equipo innovador para construir aplicaciones web de vanguardia con React, TypeScript y tecnologías frontend modernas.",
  description: "Estamos buscando un Senior Frontend Developer para unirse a nuestro equipo de productos. Serás responsable de construir interfaces de usuario para nuestras aplicaciones web, asegurando que sean responsivas, accesibles y con un rendimiento óptimo.",
  responsibilities: [
    "Desarrollar nuevas características orientadas al usuario usando React y TypeScript",
    "Construir componentes y bibliotecas reutilizables para uso futuro",
    "Traducir diseños y wireframes a código de alta calidad",
    "Optimizar aplicaciones para máximo rendimiento",
    "Colaborar con desarrolladores back-end y diseñadores"
  ],
  requirements: [
    "3+ años de experiencia con React",
    "Sólido conocimiento en TypeScript",
    "Experiencia con herramientas frontend modernas",
    "Comprensión de estándares de accesibilidad web",
    "Excelentes habilidades para resolver problemas",
    "Sólidas habilidades de comunicación"
  ],
  benefits: [
    "Salario competitivo",
    "Seguro de salud",
    "Horario de trabajo flexible",
    "Opciones de trabajo remoto",
    "Presupuesto para desarrollo profesional"
  ],
  aboutCompany: "TechNova es una empresa líder en desarrollo de software que se especializa en aplicaciones web y móviles. Estamos comprometidos a crear soluciones innovadoras para empresas de todos los tamaños.",
  companyType: "Empresa de Tecnología"
};

// Mock similar jobs
const similarJobs = [
  {
    id: 201,
    title: "Frontend Developer",
    company: "WebSolutions",
    location: "Santiago",
    type: "Tiempo Completo",
    description: "Construye aplicaciones web responsivas con React y tecnologías frontend modernas.",
    logo: "/placeholder.svg",
    new: true
  },
  {
    id: 202,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Santo Domingo",
    type: "Tiempo Completo",
    description: "Crea interfaces de usuario atractivas para aplicaciones web y móviles.",
    logo: "/placeholder.svg",
    featured: true
  },
  {
    id: 203,
    title: "React Native Developer",
    company: "MobileApps",
    location: "Remoto",
    type: "Contrato",
    description: "Desarrolla aplicaciones móviles multiplataforma con React Native.",
    logo: "/placeholder.svg",
    new: true
  },
];

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [isApplying, setIsApplying] = useState(false);
  
  const handleApply = () => {
    toast({
      title: "Aplicación enviada",
      description: "Tu solicitud ha sido enviada correctamente.",
    });
    setIsApplying(false);
  };
  
  const handleSendCV = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email requerido",
        description: "Por favor ingresa tu dirección de correo electrónico",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "CV enviado",
      description: `Tu CV ha sido enviado a ${jobDetails.company}`,
    });
    setEmail("");
  };
  
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
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link to="/empleos" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a Listados
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="mr-6 mb-4 md:mb-0">
                    <div className="bg-gray-100 h-20 w-20 rounded-md flex items-center justify-center">
                      <img src={jobDetails.logo} alt={jobDetails.company} className="h-12 w-12" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{jobDetails.title}</h1>
                    <div className="text-lg text-gray-700 font-medium mb-2">{jobDetails.company}</div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {jobDetails.location}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {jobDetails.type}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Building className="h-4 w-4 mr-1" />
                        {jobDetails.category}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {jobDetails.postedDate}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="font-semibold text-xl mb-1">Rango Salarial</div>
                  <div className="text-blue-700 font-bold text-2xl">{jobDetails.salary}</div>
                </div>
                
                <section className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Resumen del Empleo</h2>
                  <p className="text-gray-700">{jobDetails.summary}</p>
                </section>
                
                <Separator className="my-6" />
                
                <section className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Descripción del Empleo</h2>
                  <p className="text-gray-700 mb-6">{jobDetails.description}</p>
                  
                  <h3 className="text-lg font-bold mb-3">Responsabilidades</h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                    {jobDetails.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-bold mb-3">Requisitos</h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                    {jobDetails.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-bold mb-3">Beneficios</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {jobDetails.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
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
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              rating >= star
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
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
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Acerca de {jobDetails.company}</h2>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 h-14 w-14 rounded-md flex items-center justify-center mr-4">
                    <img src={jobDetails.logo} alt={jobDetails.company} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{jobDetails.company}</h3>
                    <p className="text-gray-600 text-sm">{jobDetails.companyType}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{jobDetails.aboutCompany}</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/empresas/technova" className="flex items-center">
                    Ver Perfil de Empresa
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Aplicar para esta posición</h2>
                
                {isApplying ? (
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">
                      Complete el formulario para aplicar a esta posición.
                    </p>
                    <Button 
                      onClick={handleApply} 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Enviar Aplicación
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsApplying(false)}
                      className="w-full"
                    >
                      Cancelar
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button 
                      onClick={() => setIsApplying(true)} 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Aplicar Ahora
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">O envía tu CV por correo</span>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-sm mb-2 text-indigo-700">Envía tu CV a:</h3>
                      <p className="text-indigo-700 font-mono text-sm mb-4">jobs@technova.com</p>
                      <form onSubmit={handleSendCV}>
                        <Input
                          type="email"
                          placeholder="Tu correo electrónico"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mb-2"
                        />
                        <Button 
                          type="submit" 
                          className="w-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                        >
                          Enviar CV
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Empleos Similares</h2>
                <div className="space-y-4">
                  {similarJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                      <div className="flex items-start">
                        <div className="bg-gray-100 h-10 w-10 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <img src={job.logo} alt={job.company} className="h-6 w-6" />
                        </div>
                        <div>
                          <Link to={`/empleos/${job.id}`} className="block">
                            <h3 className="font-bold text-sm hover:text-blue-600 transition-colors">
                              {job.title}
                            </h3>
                          </Link>
                          <p className="text-xs text-gray-600 mb-1">{job.company}</p>
                          <div className="flex items-center mb-2">
                            <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                            <span className="text-xs text-gray-500">{job.location}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <Badge variant="outline" className="text-xs">
                              {job.type}
                            </Badge>
                            {job.new && (
                              <Badge className="bg-blue-100 text-blue-800 text-xs">
                                Nuevo
                              </Badge>
                            )}
                            {job.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                                Destacado
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/empleos">Ver Más Empleos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetailPage;
