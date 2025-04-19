
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { PlusCircle, Trash2, Upload, Calendar, Briefcase, GraduationCap, Star } from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSaveProfile = () => {
    toast({
      title: "Perfil actualizado",
      description: "Tu perfil ha sido actualizado correctamente.",
    });
    setIsEditing(false);
  };
  
  const handleAddExperience = () => {
    toast({
      title: "Experiencia añadida",
      description: "La experiencia ha sido añadida a tu perfil.",
    });
  };
  
  const handleAddEducation = () => {
    toast({
      title: "Educación añadida",
      description: "La información educativa ha sido añadida a tu perfil.",
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Mi Perfil Profesional</h1>
          <p className="text-gray-600">Administra tu información profesional y preferencias</p>
        </div>
        <div className="mt-4 md:mt-0">
          {isEditing ? (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancelar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveProfile}>
                Guardar Cambios
              </Button>
            </div>
          ) : (
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsEditing(true)}>
              Editar Perfil
            </Button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Información Personal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-start mb-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Carlos Rodriguez" />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="ghost" size="sm" className="mt-2">
                      <Upload className="h-4 w-4 mr-1" />
                      Cambiar
                    </Button>
                  )}
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input
                        id="name"
                        defaultValue="Carlos Rodriguez"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Título Profesional</Label>
                      <Input
                        id="title"
                        defaultValue="Desarrollador Web"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="carlos.rodriguez@ejemplo.com"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        defaultValue="+52 55 1234 5678"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Ubicación</Label>
                      <Input
                        id="location"
                        defaultValue="Ciudad de México, México"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="availability">Disponibilidad</Label>
                      <Select disabled={!isEditing} defaultValue="full-time">
                        <SelectTrigger id="availability">
                          <SelectValue placeholder="Seleccionar disponibilidad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Tiempo Completo</SelectItem>
                          <SelectItem value="part-time">Medio Tiempo</SelectItem>
                          <SelectItem value="contract">Contrato</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="bio">Biografía Profesional</Label>
                <Textarea
                  id="bio"
                  className="mt-1 resize-none"
                  rows={4}
                  defaultValue="Desarrollador web con 5+ años de experiencia en tecnologías frontend y backend. Especializado en React, Node.js y TypeScript. Apasionado por crear experiencias de usuario atractivas y funcionales."
                  disabled={!isEditing}
                />
              </div>
              
              <div className="mt-4">
                <Label>Habilidades</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "JavaScript", "TypeScript", "Node.js", "HTML", "CSS", "Git", "UI/UX", "Responsive Design"].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {skill}
                      {isEditing && (
                        <button className="ml-1 text-red-500 hover:text-red-700">
                          <Trash2 className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="flex items-center">
                      <PlusCircle className="h-3.5 w-3.5 mr-1" />
                      Añadir
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle>Experiencia Laboral</CardTitle>
              {isEditing && (
                <Button variant="outline" size="sm" onClick={handleAddExperience}>
                  <PlusCircle className="h-4 w-4 mr-1" />
                  Añadir
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {workExperience.map((experience, index) => (
                  <div key={index} className="relative">
                    {isEditing && (
                      <button className="absolute right-0 top-0 text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                    <div className="flex items-start">
                      <div className="bg-gray-100 h-12 w-12 rounded-md flex items-center justify-center mr-4">
                        <Briefcase className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                          <h3 className="font-semibold text-lg">{experience.title}</h3>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {experience.period}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-1">{experience.company}</p>
                        <p className="text-gray-600 text-sm mb-2">{experience.location}</p>
                        <p className="text-gray-600">{experience.description}</p>
                      </div>
                    </div>
                    {index < workExperience.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle>Educación</CardTitle>
              {isEditing && (
                <Button variant="outline" size="sm" onClick={handleAddEducation}>
                  <PlusCircle className="h-4 w-4 mr-1" />
                  Añadir
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {isEditing && (
                      <button className="absolute right-0 top-0 text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                    <div className="flex items-start">
                      <div className="bg-gray-100 h-12 w-12 rounded-md flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-1">{edu.institution}</p>
                        <p className="text-gray-600 text-sm">{edu.location}</p>
                      </div>
                    </div>
                    {index < education.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Perfil Público</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Estado</span>
                  <Badge className="bg-green-100 text-green-800 border-none">Activo</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Visibilidad para reclutadores</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Visible</span>
                    <Button variant="outline" size="sm" disabled={!isEditing}>
                      Cambiar
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">URL del perfil</span>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    Copiar
                  </Button>
                </div>
                
                <Separator />
                
                <div className="pt-2">
                  <h3 className="font-medium mb-3">Redes Sociales</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        defaultValue="https://linkedin.com/in/carlosrodriguez"
                        className="mt-1"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="github">GitHub</Label>
                      <Input
                        id="github"
                        defaultValue="https://github.com/carlosrodriguez"
                        className="mt-1"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Sitio Web</Label>
                      <Input
                        id="website"
                        defaultValue="https://carlosrodriguez.dev"
                        className="mt-1"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="pt-2">
                  <h3 className="font-medium mb-3">Preferencias de Empleo</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="job-title">Título de Empleo Deseado</Label>
                      <Input
                        id="job-title"
                        defaultValue="Senior Frontend Developer"
                        className="mt-1"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="salary">Expectativa Salarial (USD)</Label>
                      <Select disabled={!isEditing} defaultValue="60-80k">
                        <SelectTrigger id="salary">
                          <SelectValue placeholder="Seleccionar rango" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="40-60k">$40,000 - $60,000</SelectItem>
                          <SelectItem value="60-80k">$60,000 - $80,000</SelectItem>
                          <SelectItem value="80-100k">$80,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="work-mode">Modo de Trabajo</Label>
                      <Select disabled={!isEditing} defaultValue="remote">
                        <SelectTrigger id="work-mode">
                          <SelectValue placeholder="Seleccionar modo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="onsite">Presencial</SelectItem>
                          <SelectItem value="hybrid">Híbrido</SelectItem>
                          <SelectItem value="remote">Remoto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sample data
const workExperience = [
  {
    title: "Senior Frontend Developer",
    company: "TechSolutions Inc.",
    location: "Ciudad de México, México",
    period: "Ene 2022 - Presente",
    description: "Desarrollo de aplicaciones web con React, TypeScript y GraphQL. Implementación de arquitecturas escalables y mantenibles. Colaboración con equipos de diseño y backend para crear experiencias de usuario completas."
  },
  {
    title: "Frontend Developer",
    company: "WebCreations",
    location: "Guadalajara, México",
    period: "Mar 2019 - Dic 2021",
    description: "Desarrollo de interfaces de usuario responsivas y accesibles. Implementación de mejoras de rendimiento y optimización. Mantenimiento y desarrollo de nuevas características para aplicaciones existentes."
  },
  {
    title: "Web Developer",
    company: "DigitalAgency",
    location: "Ciudad de México, México",
    period: "Jun 2017 - Feb 2019",
    description: "Creación de sitios web para diversos clientes. Desarrollo de soluciones personalizadas con HTML, CSS y JavaScript. Implementación de integraciones con diversas APIs y servicios."
  }
];

const education = [
  {
    degree: "Maestría en Ingeniería de Software",
    institution: "Universidad Nacional Autónoma de México",
    location: "Ciudad de México, México",
    period: "2020 - 2022"
  },
  {
    degree: "Licenciatura en Ciencias de la Computación",
    institution: "Instituto Tecnológico de Monterrey",
    location: "Monterrey, México",
    period: "2013 - 2017"
  }
];

export default ProfilePage;
