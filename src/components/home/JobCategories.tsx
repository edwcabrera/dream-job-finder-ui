
import { Link } from "react-router-dom";
import { 
  Code, 
  LineChart, 
  Palette, 
  ShoppingCart, 
  BarChart3, 
  HeadphonesIcon, 
  MonitorSmartphone,
  Briefcase,
  Megaphone,
  Users,
  Globe,
  GraduationCap
} from "lucide-react";

const categories = [
  {
    name: "Tecnología",
    icon: <Code className="h-8 w-8 text-blue-500" />,
    count: 345,
    slug: "tecnologia",
    description: "Desarrollo, IT y Software"
  },
  {
    name: "Marketing Digital",
    icon: <Megaphone className="h-8 w-8 text-indigo-500" />,
    count: 180,
    slug: "marketing",
    description: "Marketing y Publicidad"
  },
  {
    name: "Diseño",
    icon: <Palette className="h-8 w-8 text-pink-500" />,
    count: 165,
    slug: "diseno",
    description: "Diseño Gráfico y UX/UI"
  },
  {
    name: "Ventas",
    icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
    count: 95,
    slug: "ventas",
    description: "Ventas y Comercial"
  },
  {
    name: "Finanzas",
    icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
    count: 120,
    slug: "finanzas",
    description: "Contabilidad y Finanzas"
  },
  {
    name: "Atención al Cliente",
    icon: <HeadphonesIcon className="h-8 w-8 text-red-500" />,
    count: 85,
    slug: "atencion-cliente",
    description: "Soporte y Servicio"
  },
  {
    name: "Trabajo Remoto",
    icon: <MonitorSmartphone className="h-8 w-8 text-teal-500" />,
    count: 210,
    slug: "remoto",
    description: "Posiciones 100% Remotas"
  },
  {
    name: "Recursos Humanos",
    icon: <Users className="h-8 w-8 text-purple-500" />,
    count: 75,
    slug: "recursos-humanos",
    description: "RRHH y Gestión de Talento"
  },
  {
    name: "Internacional",
    icon: <Globe className="h-8 w-8 text-cyan-500" />,
    count: 95,
    slug: "internacional",
    description: "Oportunidades Globales"
  },
  {
    name: "Primer Empleo",
    icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
    count: 150,
    slug: "primer-empleo",
    description: "Sin Experiencia"
  }
];

const JobCategories = () => {
  return (
    <section className="py-16 bg-background border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explorar Categorías de Empleo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora empleos por categoría para encontrar oportunidades que se adapten a tu experiencia y carrera
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/empleos?categoria=${category.slug}`}
              className="group bg-card hover:bg-accent rounded-lg p-6 transition-all duration-200 border border-border hover:border-accent-foreground/20 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-secondary group-hover:bg-secondary/70 transition-colors mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
              <span className="text-xs text-primary">{category.count} empleos disponibles</span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/empleos"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver todas las categorías
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
