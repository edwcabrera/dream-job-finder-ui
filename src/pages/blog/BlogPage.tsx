
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock blog articles data
const articles = [
  {
    id: 1,
    title: "10 consejos para mejorar tu currículum y destacar entre los candidatos",
    excerpt: "Aprende cómo estructurar tu CV de manera efectiva y hacer que los reclutadores se interesen en tu perfil desde el primer vistazo.",
    image: "/placeholder.svg",
    category: "Consejos",
    author: "María Gómez",
    date: "15 Abr 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Las habilidades más demandadas en el mercado laboral tecnológico en 2025",
    excerpt: "Descubre cuáles son las competencias técnicas y blandas que las empresas de tecnología están buscando este año.",
    image: "/placeholder.svg",
    category: "Tendencias",
    author: "Carlos Ruiz",
    date: "10 Abr 2025",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Cómo prepararte para una entrevista virtual y causar una buena impresión",
    excerpt: "Las entrevistas virtuales llegaron para quedarse. Te enseñamos cómo prepararte para brillar en tu próxima entrevista por videollamada.",
    image: "/placeholder.svg",
    category: "Entrevistas",
    author: "Laura Mendoza",
    date: "5 Abr 2025",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Beneficios del trabajo remoto: cómo adaptarse al nuevo paradigma laboral",
    excerpt: "El trabajo remoto ofrece flexibilidad y otros beneficios, pero también presenta desafíos. Aprende cómo maximizar esta modalidad.",
    image: "/placeholder.svg",
    category: "Trabajo Remoto",
    author: "Javier Pérez",
    date: "1 Abr 2025",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "Cómo negociar un mejor salario: estrategias que funcionan",
    excerpt: "Negociar tu salario es una habilidad crucial en tu desarrollo profesional. Te mostramos técnicas efectivas para lograrlo con éxito.",
    image: "/placeholder.svg",
    category: "Consejos",
    author: "Ana Martínez",
    date: "28 Mar 2025",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "El futuro del trabajo: tendencias que transformarán las profesiones en la próxima década",
    excerpt: "La inteligencia artificial, la automatización y otras tecnologías están redefiniendo el panorama laboral. ¿Estás preparado para lo que viene?",
    image: "/placeholder.svg",
    category: "Tendencias",
    author: "Diego Hernández",
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
      <div className="bg-job-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Blog EmpleoLatino</h1>
            <p className="text-xl text-gray-600">
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
                  className="pl-10"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas</SelectItem>
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
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button>Cargar más artículos</Button>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
