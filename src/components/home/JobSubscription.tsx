
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const JobSubscription = () => {
  const [email, setEmail] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [notificationMethod, setNotificationMethod] = useState("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Se requiere un correo electrónico",
        description: "Por favor ingrese su dirección de correo electrónico.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send this to your backend
    toast({
      title: "¡Suscripción exitosa!",
      description: "Ahora recibirás alertas de empleo personalizadas.",
    });
    
    // Reset form
    setEmail("");
    setJobCategory("");
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nunca Pierdas una Oportunidad de Empleo</h2>
              <p className="text-gray-600 mb-6">
                Recibe alertas de trabajo personalizadas que se adapten a tus habilidades y preferencias. Mantente adelante de la competencia con acceso anticipado a las nuevas oportunidades.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Recomendaciones de empleo personalizadas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Acceso anticipado a nuevas ofertas de trabajo</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Recibe alertas por correo, WhatsApp o Telegram</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Actualización semanal</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold mb-6">Suscríbete a Alertas de Empleo</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email-input">Tu correo electrónico</Label>
                    <Input
                      id="email-input"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="job-category">Selecciona tu área</Label>
                    <select
                      id="job-category"
                      value={jobCategory}
                      onChange={(e) => setJobCategory(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="" disabled>Selecciona categoría</option>
                      <option value="tecnologia">Tecnología</option>
                      <option value="marketing">Marketing</option>
                      <option value="diseno">Diseño</option>
                      <option value="ventas">Ventas</option>
                      <option value="finanzas">Finanzas</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label>Recibir alertas vía</Label>
                    <RadioGroup
                      value={notificationMethod}
                      onValueChange={setNotificationMethod}
                      className="mt-2 flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email" className="cursor-pointer">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp" />
                        <Label htmlFor="whatsapp" className="cursor-pointer">WhatsApp</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="telegram" id="telegram" />
                        <Label htmlFor="telegram" className="cursor-pointer">Telegram</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button type="submit" className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
                    Suscribirse
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSubscription;
