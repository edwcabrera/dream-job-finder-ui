
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, Briefcase, Book, Clock, MapPin, PenTool, Languages, Upload, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AiAssistantForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<"manual" | "resume">("manual");
  
  const [formData, setFormData] = useState({
    profession: "",
    experience: "",
    education: "",
    skills: "",
    location: "",
    remoteOnly: false,
    salary: "",
    industries: [],
    availability: "",
    languages: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      toast({
        title: "CV subido correctamente",
        description: `Archivo: ${file.name}`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Análisis completado",
        description: "Hemos encontrado empleos que coinciden con tu perfil",
      });
      // Here you would redirect to results page in a real app
    }, 2000);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="text-job-blue-600 h-5 w-5 mr-2" />
          Asistente IA de Búsqueda de Empleo
        </CardTitle>
        <CardDescription>
          Nuestro asistente de inteligencia artificial analizará tu perfil y encontrará
          las mejores oportunidades laborales que se ajusten a tus habilidades y experiencia.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "manual" | "resume")}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="manual">Ingresar Datos Manualmente</TabsTrigger>
            <TabsTrigger value="resume">Subir CV</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manual">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profesión o Título</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="profession"
                        placeholder="Ej: Desarrollador Full Stack"
                        value={formData.profession}
                        onChange={(e) => handleInputChange("profession", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Años de Experiencia</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
                    >
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Selecciona" />
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="education">Nivel Educativo</Label>
                    <div className="relative">
                      <Book className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Select
                        value={formData.education}
                        onValueChange={(value) => handleInputChange("education", value)}
                      >
                        <SelectTrigger id="education" className="pl-10">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="secundaria">Secundaria</SelectItem>
                          <SelectItem value="bachillerato">Bachillerato</SelectItem>
                          <SelectItem value="tecnico">Técnico/Tecnólogo</SelectItem>
                          <SelectItem value="universitario">Universitario</SelectItem>
                          <SelectItem value="posgrado">Posgrado</SelectItem>
                          <SelectItem value="maestria">Maestría</SelectItem>
                          <SelectItem value="doctorado">Doctorado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="skills">Habilidades Principales</Label>
                    <div className="relative">
                      <PenTool className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea
                        id="skills"
                        placeholder="Ej: JavaScript, React, SQL, Gestión de Proyectos..."
                        value={formData.skills}
                        onChange={(e) => handleInputChange("skills", e.target.value)}
                        className="pl-10 min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Ubicación Preferida</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        placeholder="Ej: Ciudad de México, México"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 py-2">
                    <Checkbox
                      id="remote"
                      checked={formData.remoteOnly as boolean}
                      onCheckedChange={(checked) => 
                        handleInputChange("remoteOnly", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="remote"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Solo buscar trabajos remotos
                    </label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="salary">Expectativa Salarial</Label>
                    <Input
                      id="salary"
                      placeholder="Ej: $35,000 - $45,000 MXN"
                      value={formData.salary}
                      onChange={(e) => handleInputChange("salary", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="availability">Disponibilidad</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Select
                        value={formData.availability}
                        onValueChange={(value) => handleInputChange("availability", value)}
                      >
                        <SelectTrigger id="availability" className="pl-10">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inmediata">Inmediata</SelectItem>
                          <SelectItem value="2-weeks">2 semanas</SelectItem>
                          <SelectItem value="1-month">1 mes</SelectItem>
                          <SelectItem value="2-months">2 meses</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="languages">Idiomas</Label>
                    <div className="relative">
                      <Languages className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="languages"
                        placeholder="Ej: Español (Nativo), Inglés (Avanzado)"
                        value={formData.languages}
                        onChange={(e) => handleInputChange("languages", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Analizando tu perfil...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Encontrar Empleos Ideales
                    </>
                  )}
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="resume">
            <div className="py-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Sube tu CV</h3>
                  <p className="text-gray-500 mb-4 max-w-md">
                    Nuestro asistente IA analizará tu CV y extraerá automáticamente tu experiencia, 
                    habilidades y preferencias para encontrar los mejores empleos para ti.
                  </p>
                  
                  <label className="cursor-pointer">
                    <div className="bg-job-blue-600 text-white px-4 py-2 rounded-md hover:bg-job-blue-700 transition-colors">
                      Seleccionar Archivo
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleResumeChange}
                    />
                  </label>
                  
                  {resumeFile && (
                    <div className="mt-4 text-sm text-gray-600">
                      Archivo seleccionado: <span className="font-medium">{resumeFile.name}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleSubmit} 
                  disabled={!resumeFile || loading} 
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Analizando tu CV...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Analizar y Encontrar Empleos
                    </>
                  )}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AiAssistantForm;
