
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Mock article data for the first article
const article = {
  id: 1,
  title: "10 consejos para mejorar tu currículum y destacar entre los candidatos",
  excerpt: "Aprende cómo estructurar tu CV de manera efectiva y hacer que los reclutadores se interesen en tu perfil desde el primer vistazo.",
  image: "/lovable-uploads/84a7ae9c-4725-48b0-807c-f94529ddf4df.png",
  category: "Consejos",
  author: {
    name: "María Gómez",
    role: "Especialista en RRHH",
    avatar: "/placeholder.svg",
    bio: "Especialista en recursos humanos con más de 10 años de experiencia en reclutamiento y selección de personal."
  },
  date: "15 de Abril, 2025",
  readTime: "5 minutos de lectura",
  content: `
    <p class="mb-4">Un currículum bien estructurado es tu carta de presentación en el mundo laboral. En un mercado competitivo, tener un CV que destaque es fundamental para captar la atención de los reclutadores.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">1. Personaliza tu CV para cada oferta</h2>
    <p class="mb-4">Uno de los errores más comunes es enviar el mismo CV a todas las ofertas. Dedica tiempo a personalizar tu currículum para cada posición, destacando las habilidades y experiencias relevantes para el puesto específico.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">2. Estructura clara y legible</h2>
    <p class="mb-4">Utiliza una estructura clara con secciones bien definidas. Incluye encabezados para Experiencia, Educación, Habilidades y otras secciones relevantes. Mantén un diseño limpio y espaciado que facilite la lectura.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">3. Destaca tus logros, no solo tus responsabilidades</h2>
    <p class="mb-4">En lugar de listar simplemente tus tareas diarias, enfócate en los resultados y logros concretos. Por ejemplo, en vez de "Responsable de ventas", escribe "Incrementé las ventas un 25% en 6 meses mediante la implementación de nuevas estrategias".</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">4. Utiliza palabras clave relevantes</h2>
    <p class="mb-4">Muchas empresas utilizan sistemas de seguimiento de candidatos (ATS) que filtran CV basándose en palabras clave. Revisa la descripción del puesto e incluye términos relevantes de tu industria.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">5. Mantén la información actualizada</h2>
    <p class="mb-4">Asegúrate de que tu información de contacto y experiencia laboral estén al día. Elimina experiencias muy antiguas o irrelevantes para el puesto al que aplicas.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">6. Incluye un perfil profesional impactante</h2>
    <p class="mb-4">Comienza tu CV con un breve resumen o perfil profesional que destaque tus principales fortalezas y qué puedes aportar a la empresa. Esto ayuda a captar rápidamente la atención del reclutador.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">7. Cuida la ortografía y gramática</h2>
    <p class="mb-4">Los errores ortográficos o gramaticales dan una mala impresión. Revisa cuidadosamente tu CV o pide a alguien que lo haga por ti antes de enviarlo.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">8. Sé conciso</h2>
    <p class="mb-4">Intenta mantener tu CV en 1-2 páginas. Sé selectivo con la información que incluyes y elimina detalles innecesarios o redundantes.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">9. Demuestra tu formación continua</h2>
    <p class="mb-4">Incluye cursos, certificaciones o talleres recientes que hayas completado. Esto demuestra tu compromiso con el aprendizaje y la actualización constante.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">10. Adapta el formato a tu industria</h2>
    <p class="mb-4">Diferentes sectores tienen distintas expectativas. Un diseñador gráfico puede tener un CV más creativo, mientras que un profesional financiero debería mantener un formato más conservador. Investiga qué es lo habitual en tu sector.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusión</h2>
    <p class="mb-4">Un buen currículum no garantiza conseguir el trabajo, pero aumenta significativamente tus posibilidades de ser llamado a una entrevista. Tómate el tiempo necesario para crear un CV que represente adecuadamente tus habilidades y experiencia.</p>
    
    <p class="mb-4">Recuerda que tu currículum es tu oportunidad para crear una primera impresión positiva. ¡Aprovéchala al máximo!</p>
  `,
};

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "Cómo prepararte para una entrevista virtual y causar una buena impresión",
    excerpt: "Las entrevistas virtuales llegaron para quedarse. Te enseñamos cómo prepararte para brillar en tu próxima entrevista por videollamada.",
    image: "/lovable-uploads/2ddac9b2-7077-4cd8-b1fc-9d636526d7c2.png",
    category: "Entrevistas",
    author: {
      name: "Laura Mendoza",
      avatar: "/placeholder.svg",
    },
    date: "5 Abr 2025",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Las habilidades más demandadas en el mercado laboral tecnológico en 2025",
    excerpt: "Descubre cuáles son las competencias técnicas y blandas que las empresas de tecnología están buscando este año.",
    image: "/lovable-uploads/b22f04c1-9078-4cfa-b986-730020b9a6eb.png",
    category: "Tendencias",
    author: {
      name: "Carlos Ruiz",
      avatar: "/placeholder.svg",
    },
    date: "10 Abr 2025",
    readTime: "7 min",
  },
];

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the article based on the ID
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Enlace copiado",
      description: "El enlace del artículo ha sido copiado al portapapeles.",
    });
  };
  
  const handleSave = () => {
    toast({
      title: "Artículo guardado",
      description: "Este artículo ha sido guardado en tus favoritos.",
    });
  };
  
  const handleLike = () => {
    toast({
      title: "¡Gracias por tu valoración!",
      description: "Nos alegra que hayas encontrado útil este artículo.",
    });
  };
  
  const handleDislike = () => {
    toast({
      title: "¡Gracias por tu valoración!",
      description: "Trabajaremos para mejorar nuestro contenido.",
    });
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver al Blog
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 hover:bg-blue-200 text-blue-700 border-none">
              {article.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex items-center mb-6">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{article.author.name}</div>
                <div className="text-sm text-gray-500">{article.author.role}</div>
              </div>
              
              <div className="ml-auto flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{article.date}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
              
              <div className="flex justify-between items-center mt-8 py-4 border-t border-b">
                <div className="font-medium">¿Te ha resultado útil este artículo?</div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex gap-1" onClick={handleLike}>
                    <ThumbsUp className="h-4 w-4" />
                    Sí
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-1" onClick={handleDislike}>
                    <ThumbsDown className="h-4 w-4" />
                    No
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-1" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                    Compartir
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-1" onClick={handleSave}>
                    <Bookmark className="h-4 w-4" />
                    Guardar
                  </Button>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center p-6 bg-gray-50 rounded-lg">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                    <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">Sobre {article.author.name}</div>
                    <div className="text-gray-600">{article.author.role}</div>
                    <p className="mt-1 text-sm text-gray-500">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((article) => (
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
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={article.author.avatar} alt={article.author.name} />
                          <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{article.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
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
            
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link to="/blog">Ver más artículos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetailPage;
