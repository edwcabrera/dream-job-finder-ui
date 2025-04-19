
import { Link } from "react-router-dom";
import { 
  Code, 
  LineChart, 
  Palette, 
  ShoppingCart, 
  BarChart3, 
  HeadphonesIcon, 
  MonitorSmartphone,
  Briefcase
} from "lucide-react";

const categories = [
  {
    name: "Tecnología",
    icon: <Code className="h-8 w-8 text-blue-500" />,
    count: 345,
    slug: "tecnologia"
  },
  {
    name: "Marketing",
    icon: <LineChart className="h-8 w-8 text-indigo-500" />,
    count: 180,
    slug: "marketing"
  },
  {
    name: "Diseño",
    icon: <Palette className="h-8 w-8 text-pink-500" />,
    count: 165,
    slug: "diseno"
  },
  {
    name: "Ventas",
    icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
    count: 95,
    slug: "ventas"
  },
  {
    name: "Finanzas",
    icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
    count: 120,
    slug: "finanzas"
  },
  {
    name: "Atención al Cliente",
    icon: <HeadphonesIcon className="h-8 w-8 text-red-500" />,
    count: 85,
    slug: "atencion-cliente"
  },
  {
    name: "Remoto",
    icon: <MonitorSmartphone className="h-8 w-8 text-teal-500" />,
    count: 210,
    slug: "remoto"
  },
  {
    name: "Nivel Inicial",
    icon: <Briefcase className="h-8 w-8 text-purple-500" />,
    count: 150,
    slug: "nivel-inicial"
  }
];

const JobCategories = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Explorar Categorías de Empleo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora empleos por categoría para encontrar oportunidades que se adapten a tu experiencia y carrera
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/empleos?categoria=${category.slug}`}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-slate-100 mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} empleos disponibles</p>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/empleos"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center"
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
