
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { MessageSquareText, Bot, Briefcase, Search, Lightbulb, ChevronRight, Upload, PlusCircle, RefreshCcw } from "lucide-react";

const AiAssistantPage = () => {
  const [activeTab, setActiveTab] = useState("CV");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<null | {
    skills: string[];
    matches: any[];
  }>(null);

  const handleProcessCV = () => {
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setResults({
        skills: [
          "React", "JavaScript", "TypeScript", "Node.js", "HTML/CSS",
          "API Integration", "Redux", "MongoDB", "Git", "Responsive Design"
        ],
        matches: sampleJobMatches
      });
      
      toast({
        title: "Análisis completado",
        description: "Hemos encontrado coincidencias basadas en tu experiencia.",
      });
    }, 2000);
  };
  
  const handleSearchJobs = (e: React.FormEvent) => {
    e.preventDefault();
    handleProcessCV(); // For demo purposes, show the same results
  };

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500 rounded-full p-4">
                <Bot className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Asistente IA para Búsqueda de Empleo</h1>
            <p className="text-gray-300 text-lg">
              Nuestro asistente de inteligencia artificial analizará tu experiencia y te recomendará las mejores oportunidades laborales adaptadas a tu perfil.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="CV" className="text-base py-3">
                  <MessageSquareText className="h-5 w-5 mr-2" />
                  Subir CV o Experiencia
                </TabsTrigger>
                <TabsTrigger value="search" className="text-base py-3">
                  <Search className="h-5 w-5 mr-2" />
                  Búsqueda por Habilidades
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="CV">
                <Card>
                  <CardHeader>
                    <CardTitle>Analiza tu CV o Experiencia</CardTitle>
                    <CardDescription>
                      Sube tu CV o describe tu experiencia para recibir recomendaciones personalizadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!results ? (
                      <div className="space-y-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <div className="mx-auto flex justify-center mb-4">
                            <Upload className="h-10 w-10 text-gray-400" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">Sube tu CV</h3>
                          <p className="text-gray-500 mb-4">Arrastra y suelta tu CV en formato PDF o DOC</p>
                          <Button variant="outline">
                            <Upload className="h-4 w-4 mr-2" />
                            Seleccionar Archivo
                          </Button>
                        </div>
                        
                        <div className="relative my-6">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">o describe tu experiencia</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="job-title">Título Profesional</Label>
                            <Input
                              id="job-title"
                              placeholder="Ej: Desarrollador Frontend, Diseñador UX/UI"
                              className="mt-1"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="experience">Experiencia y Habilidades</Label>
                            <Textarea
                              id="experience"
                              placeholder="Describe tu experiencia laboral, proyectos y habilidades técnicas..."
                              className="mt-1 resize-none"
                              rows={6}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="years-experience">Años de Experiencia</Label>
                              <Select>
                                <SelectTrigger id="years-experience">
                                  <SelectValue placeholder="Seleccionar años" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0-1">Menos de 1 año</SelectItem>
                                  <SelectItem value="1-3">1-3 años</SelectItem>
                                  <SelectItem value="3-5">3-5 años</SelectItem>
                                  <SelectItem value="5-10">5-10 años</SelectItem>
                                  <SelectItem value="10+">Más de 10 años</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="job-type">Tipo de Empleo</Label>
                              <Select>
                                <SelectTrigger id="job-type">
                                  <SelectValue placeholder="Seleccionar tipo" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="full-time">Tiempo Completo</SelectItem>
                                  <SelectItem value="part-time">Medio Tiempo</SelectItem>
                                  <SelectItem value="contract">Contrato</SelectItem>
                                  <SelectItem value="freelance">Freelance</SelectItem>
                                  <SelectItem value="internship">Prácticas</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                            onClick={handleProcessCV}
                            disabled={isProcessing}
                          >
                            {isProcessing ? (
                              <>
                                <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />
                                Analizando...
                              </>
                            ) : (
                              <>
                                <Lightbulb className="h-4 w-4 mr-2" />
                                Analizar y Encontrar Empleos
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-3">Habilidades Detectadas</h3>
                          <div className="flex flex-wrap gap-2">
                            {results.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-3"
                          >
                            <PlusCircle className="h-4 w-4 mr-1" />
                            Añadir más habilidades
                          </Button>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Empleos Recomendados (9)</h3>
                            <Select defaultValue="relevance">
                              <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Ordenar por" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="relevance">Ordenar por: Relevancia</SelectItem>
                                <SelectItem value="date">Ordenar por: Fecha</SelectItem>
                                <SelectItem value="salary">Ordenar por: Salario</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-4">
                            {results.matches.map((job) => (
                              <Card key={job.id} className="overflow-hidden">
                                <CardContent className="p-0">
                                  <div className="p-4">
                                    <div className="flex items-start">
                                      <div className="bg-gray-100 h-12 w-12 rounded flex items-center justify-center mr-4 flex-shrink-0">
                                        <img src={job.logo} alt={job.company} className="h-6 w-6" />
                                      </div>
                                      <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                          <div>
                                            <h3 className="font-semibold text-lg">{job.title}</h3>
                                            <p className="text-gray-600">{job.company} • {job.location}</p>
                                          </div>
                                          <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded">
                                            <div className="font-semibold">{job.matchPercentage}% Match</div>
                                          </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2 my-2">
                                          {job.skills.map((skill: string) => (
                                            <Badge key={skill} variant="outline" className="bg-gray-100">
                                              {skill}
                                            </Badge>
                                          ))}
                                        </div>
                                        
                                        <div className="flex justify-between items-center mt-2">
                                          <div className="text-blue-600 font-medium">{job.salary}</div>
                                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                            Ver Empleo
                                            <ChevronRight className="h-4 w-4 ml-1" />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          
                          <div className="mt-6 text-center">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Ver Más Resultados
                            </Button>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="text-lg font-medium mb-2">Mejora tu perfil para más coincidencias</h3>
                          <p className="text-gray-600 mb-4">
                            Actualiza tu perfil con más detalles sobre tu experiencia y habilidades para recibir recomendaciones más precisas.
                          </p>
                          <Button variant="outline" onClick={() => setResults(null)}>
                            Modificar Perfil
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="search">
                <Card>
                  <CardHeader>
                    <CardTitle>Búsqueda por Habilidades</CardTitle>
                    <CardDescription>
                      Selecciona las habilidades que tienes para encontrar empleos que coincidan con tu perfil
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!results ? (
                      <form onSubmit={handleSearchJobs} className="space-y-6">
                        <div>
                          <Label htmlFor="job-category">Categoría de Empleo</Label>
                          <Select>
                            <SelectTrigger id="job-category">
                              <SelectValue placeholder="Selecciona una categoría" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Tecnología</SelectItem>
                              <SelectItem value="design">Diseño</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="finance">Finanzas</SelectItem>
                              <SelectItem value="sales">Ventas</SelectItem>
                              <SelectItem value="customer-service">Atención al Cliente</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label>Habilidades</Label>
                          <div className="border rounded-md p-4 mt-1">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {["JavaScript", "React", "Node.js"].map((skill) => (
                                <Badge key={skill} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                  {skill} <span className="ml-1">×</span>
                                </Badge>
                              ))}
                            </div>
                            <Input
                              placeholder="Añadir habilidad y presionar Enter..."
                              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 pl-0"
                            />
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Añade hasta 10 habilidades para mejorar la precisión de los resultados
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="experience-level">Nivel de Experiencia</Label>
                            <Select>
                              <SelectTrigger id="experience-level">
                                <SelectValue placeholder="Seleccionar nivel" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="entry">Nivel Inicial</SelectItem>
                                <SelectItem value="mid">Nivel Medio</SelectItem>
                                <SelectItem value="senior">Nivel Senior</SelectItem>
                                <SelectItem value="lead">Nivel Directivo</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="location">Ubicación</Label>
                            <Input
                              id="location"
                              placeholder="Ciudad o 'Remoto'"
                              className="mt-1"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="salary-range">Rango Salarial</Label>
                            <Select>
                              <SelectTrigger id="salary-range">
                                <SelectValue placeholder="Seleccionar rango" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0-30k">$0 - $30,000</SelectItem>
                                <SelectItem value="30-50k">$30,000 - $50,000</SelectItem>
                                <SelectItem value="50-80k">$50,000 - $80,000</SelectItem>
                                <SelectItem value="80-120k">$80,000 - $120,000</SelectItem>
                                <SelectItem value="120k+">$120,000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="job-type-search">Tipo de Empleo</Label>
                            <Select>
                              <SelectTrigger id="job-type-search">
                                <SelectValue placeholder="Seleccionar tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="full-time">Tiempo Completo</SelectItem>
                                <SelectItem value="part-time">Medio Tiempo</SelectItem>
                                <SelectItem value="contract">Contrato</SelectItem>
                                <SelectItem value="freelance">Freelance</SelectItem>
                                <SelectItem value="internship">Prácticas</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <>
                              <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />
                              Buscando...
                            </>
                          ) : (
                            <>
                              <Search className="h-4 w-4 mr-2" />
                              Buscar Empleos Coincidentes
                            </>
                          )}
                        </Button>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium">Resultados de la Búsqueda (9)</h3>
                          <Button variant="outline" onClick={() => setResults(null)}>
                            Modificar Búsqueda
                          </Button>
                        </div>
                        
                        <div className="space-y-4">
                          {results.matches.map((job) => (
                            <Card key={job.id} className="overflow-hidden">
                              <CardContent className="p-0">
                                <div className="p-4">
                                  <div className="flex items-start">
                                    <div className="bg-gray-100 h-12 w-12 rounded flex items-center justify-center mr-4 flex-shrink-0">
                                      <img src={job.logo} alt={job.company} className="h-6 w-6" />
                                    </div>
                                    <div className="flex-grow">
                                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                        <div>
                                          <h3 className="font-semibold text-lg">{job.title}</h3>
                                          <p className="text-gray-600">{job.company} • {job.location}</p>
                                        </div>
                                        <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded">
                                          <div className="font-semibold">{job.matchPercentage}% Match</div>
                                        </div>
                                      </div>
                                      
                                      <div className="flex flex-wrap gap-2 my-2">
                                        {job.skills.map((skill: string) => (
                                          <Badge key={skill} variant="outline" className="bg-gray-100">
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                      
                                      <div className="flex justify-between items-center mt-2">
                                        <div className="text-blue-600 font-medium">{job.salary}</div>
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                          Ver Empleo
                                          <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        
                        <div className="mt-6 text-center">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Ver Más Resultados
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">¿Cómo funciona nuestro Asistente IA?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Nuestro sistema de inteligencia artificial analiza tu experiencia, habilidades y preferencias para encontrar las mejores oportunidades laborales que se ajusten a tu perfil.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                    <Upload className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sube tu CV</h3>
                  <p className="text-gray-600">
                    Sube tu CV o describe tu experiencia laboral para que nuestro sistema pueda analizarla.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                    <Briefcase className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Análisis de Habilidades</h3>
                  <p className="text-gray-600">
                    La IA identifica tus habilidades y experiencia para buscar empleos que coincidan con tu perfil.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 inline-flex mb-4">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Recomendaciones Personalizadas</h3>
                  <p className="text-gray-600">
                    Recibe recomendaciones de empleos con un porcentaje de coincidencia según tus habilidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Sample job matches data
const sampleJobMatches = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechFlow Inc.",
    location: "Ciudad de México (Remoto)",
    matchPercentage: 95,
    skills: ["React", "TypeScript", "Redux", "API Integration", "Responsive Design"],
    salary: "$60,000 - $85,000",
    logo: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Full Stack JavaScript Developer",
    company: "InnovaTech",
    location: "Bogotá, Colombia",
    matchPercentage: 90,
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    salary: "$50,000 - $70,000",
    logo: "/placeholder.svg"
  },
  {
    id: 3,
    title: "React Native Developer",
    company: "AppStudio",
    location: "Remoto",
    matchPercentage: 85,
    skills: ["React Native", "JavaScript", "Mobile Development", "API Integration"],
    salary: "$55,000 - $75,000",
    logo: "/placeholder.svg"
  }
];

export default AiAssistantPage;
