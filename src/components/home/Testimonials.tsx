
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Desarrollador Web",
    company: "TechnoSoft",
    avatar: "/placeholder.svg",
    content:
      "Gracias a EmpleoLatino encontré mi trabajo ideal en menos de 2 semanas. El proceso fue muy sencillo y recibí varias ofertas de empresas reconocidas.",
    rating: 5,
  },
  {
    id: 2,
    name: "María González",
    role: "Analista de Marketing",
    company: "MediaGrowth",
    avatar: "/placeholder.svg",
    content:
      "La plataforma es excelente para encontrar oportunidades de calidad. El asistente de AI me ayudó a encontrar exactamente lo que estaba buscando.",
    rating: 5,
  },
  {
    id: 3,
    name: "Javier Méndez",
    role: "Contador Senior",
    company: "GlobalFinance",
    avatar: "/placeholder.svg",
    content:
      "Después de meses buscando sin éxito, con EmpleoLatino encontré una excelente posición en mi área. El proceso de aplicación fue muy fluido.",
    rating: 4,
  },
  {
    id: 4,
    name: "Ana Castillo",
    role: "Diseñadora UX/UI",
    company: "CreativeDigital",
    avatar: "/placeholder.svg",
    content:
      "La calidad de las ofertas laborales es impresionante. Pude filtrar exactamente lo que buscaba y conectar con empresas innovadoras.",
    rating: 5,
  },
  {
    id: 5,
    name: "Roberto Vega",
    role: "Gerente de Ventas",
    company: "SalesPro",
    avatar: "/placeholder.svg",
    content:
      "EmpleoLatino cambió mi vida profesional. Las recomendaciones personalizadas me ayudaron a encontrar un trabajo que realmente se ajusta a mis habilidades.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Lo que dicen nuestros usuarios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de profesionales han encontrado su trabajo ideal con EmpleoLatino
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-white">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role} en {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
