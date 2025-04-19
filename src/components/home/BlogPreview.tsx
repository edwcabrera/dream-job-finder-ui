
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const blogArticles = [
  {
    id: 1,
    title: "10 Tips Para Ser Notado por Reclutadores",
    excerpt: "Aprende cómo destacar tu currículum y perfil profesional para llamar la atención de los reclutadores.",
    image: "/lovable-uploads/84a7ae9c-4725-48b0-807c-f94529ddf4df.png",
    category: "Consejos",
    author: "María Gómez",
    date: "20 Abr 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Cómo Prepararte Para Tu Próxima Entrevista de Trabajo",
    excerpt: "Estrategias prácticas para brillar en tu entrevista y aumentar tus posibilidades de conseguir el empleo.",
    image: "/lovable-uploads/2ddac9b2-7077-4cd8-b1fc-9d636526d7c2.png",
    category: "Entrevistas",
    author: "Carlos Mendoza",
    date: "15 Abr 2025",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "El Futuro del Trabajo: Tendencias a Observar en 2025",
    excerpt: "Uno de los años más importantes para la evolución laboral. Descubre las tendencias que definirán el futuro del trabajo.",
    image: "/lovable-uploads/b22f04c1-9078-4cfa-b986-730020b9a6eb.png",
    category: "Tendencias",
    author: "Ana Martínez",
    date: "10 Abr 2025",
    readTime: "6 min",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Consejos y Artículos Profesionales</h2>
            <p className="text-gray-600">
              Información útil para ayudarte a crecer en tu carrera
            </p>
          </div>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            Ver todos los artículos
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <Link to={`/blog/${article.id}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <Badge className="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-700 border-none">
                  {article.category}
                </Badge>
                <Link to={`/blog/${article.id}`}>
                  <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
