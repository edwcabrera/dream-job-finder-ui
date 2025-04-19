
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Calendar, Clock } from "lucide-react";

// Mock blog articles data
const articles = [
  {
    id: 1,
    title: "10 consejos para mejorar tu currículum y destacar entre los candidatos",
    excerpt: "Aprende cómo estructurar tu CV de manera efectiva y hacer que los reclutadores se interesen en tu perfil desde el primer vistazo.",
    image: "/lovable-uploads/84a7ae9c-4725-48b0-807c-f94529ddf4df.png",
    category: "Consejos",
    author: {
      name: "María Gómez",
      avatar: "/placeholder.svg",
    },
    date: "15 Abr 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Las habilidades más demandadas en el mercado laboral tecnológico en 2025",
    excerpt: "Descubre cuáles son las competencias técnicas y blandas que las empresas de tecnología están buscando este año.",
    image: "/lovable-uploads/2ddac9b2-7077-4cd8-b1fc-9d636526d7c2.png",
    category: "Tendencias",
    author: {
      name: "Carlos Ruiz",
      avatar: "/placeholder.svg",
    },
    date: "10 Abr 2025",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Cómo prepararte para una entrevista virtual y causar una buena impresión",
    excerpt: "Las entrevistas virtuales llegaron para quedarse. Te enseñamos cómo prepararte para brillar en tu próxima entrevista por videollamada.",
    image: "/lovable-uploads/b22f04c1-9078-4cfa-b986-730020b9a6eb.png",
    category: "Entrevistas",
    author: {
      name: "Laura Mendoza",
      avatar: "/placeholder.svg",
    },
    date: "5 Abr 2025",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Beneficios del trabajo remoto: cómo adaptarse al nuevo paradigma laboral",
    excerpt: "El trabajo remoto ofrece flexibilidad y otros beneficios, pero también presenta desafíos. Aprende cómo maximizar esta modalidad.",
    image: "/placeholder.svg",
    category: "Trabajo Remoto",
    author: {
      name: "Javier Pérez",
      avatar: "/placeholder.svg",
    },
    date: "1 Abr 2025",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "Cómo negociar un mejor salario: estrategias que funcionan",
    excerpt: "Negociar tu salario es una habilidad crucial en tu desarrollo profesional. Te mostramos técnicas efectivas para lograrlo con éxito.",
    image: "/placeholder.svg",
    category: "Consejos",
    author: {
      name: "Ana Martínez",
      avatar: "/placeholder.svg",
    },
    date: "28 Mar 2025",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "El futuro del trabajo: tendencias que transformarán las profesiones en la próxima década",
    excerpt: "La inteligencia artificial, la automatización y otras tecnologías están redefiniendo el panorama laboral. ¿Estás preparado para lo que viene?",
    image: "/placeholder.svg",
    category: "Tendencias",
    author: {
      name: "Diego Hernández",
      avatar: "/placeholder.svg",
    },
    date: "22 Mar 2025",
    readTime: "10 min",
  },
];

const BlogPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  
  // In a real app, you would filter articles based on query and category
  const filteredArticles = articles;

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Blog DreamJob</h1>
            <p className="text-xl text-gray-300">
              Consejos, tendencias y recursos para impulsar tu carrera profesional
            </p>
          </div>
          
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-slate-700 text-white"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px] bg-white/10 border-slate-700 text-white">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  <SelectItem value="consejos">Consejos</SelectItem>
                  <SelectItem value="tendencias">Tendencias</SelectItem>
                  <SelectItem value="entrevistas">Entrevistas</SelectItem>
                  <SelectItem value="trabajo-remoto">Trabajo Remoto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
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
          
          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">Cargar más artículos</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
