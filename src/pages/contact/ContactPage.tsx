
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Contacto y Soporte</h1>
            <p className="text-gray-600">
              Estamos aquí para ayudarte. Contáctanos si tienes alguna pregunta o sugerencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="p-3 bg-job-blue-100 rounded-full">
                          <Mail className="h-6 w-6 text-job-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                        <p className="text-gray-600">contacto@empleolatino.com</p>
                        <p className="text-gray-600">soporte@empleolatino.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="p-3 bg-job-blue-100 rounded-full">
                          <Phone className="h-6 w-6 text-job-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Teléfono</h3>
                        <p className="text-gray-600">+52 (55) 1234 5678</p>
                        <p className="text-gray-600">Lunes a Viernes: 9am - 6pm (CST)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="p-3 bg-job-blue-100 rounded-full">
                          <MapPin className="h-6 w-6 text-job-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Oficina Central</h3>
                        <p className="text-gray-600">
                          Av. Paseo de la Reforma 222, Piso 15<br />
                          Col. Juárez, 06600<br />
                          Ciudad de México, México
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="p-3 bg-job-blue-100 rounded-full">
                          <MessageSquare className="h-6 w-6 text-job-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Chat en Vivo</h3>
                        <p className="text-gray-600">
                          Disponible en nuestro sitio web<br />
                          Lunes a Viernes: 9am - 8pm (CST)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
