
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import JobDetail from "@/components/jobs/JobDetail";
import JobCard from "@/components/jobs/JobCard";

// Mock job data with additional details for the selected job
const jobDetails = {
  id: 1,
  title: "Desarrollador Full Stack",
  company: "TechnoLatino",
  location: "Ciudad de México, México",
  type: "Tiempo Completo",
  category: "Tecnología",
  salary: "$40,000 - $60,000 MXN",
  posted: "Hace 2 días",
  logo: "/placeholder.svg",
  description: "Estamos buscando un Desarrollador Full Stack con experiencia en React, Node.js y TypeScript para unirse a nuestro equipo de desarrollo. El candidato ideal tendrá una sólida comprensión de los principios de desarrollo web y experiencia en la construcción de aplicaciones web escalables.",
  requirements: [
    "3+ años de experiencia en desarrollo web",
    "Experiencia sólida con React, Node.js y TypeScript",
    "Conocimientos de bases de datos SQL y NoSQL",
    "Familiaridad con AWS o servicios en la nube similares",
    "Experiencia con metodologías ágiles",
    "Habilidades de comunicación efectiva en español e inglés",
    "Capacidad para trabajar en equipo remoto"
  ],
  benefits: [
    "Salario competitivo",
    "Horario flexible",
    "Trabajo remoto con opción de presencial",
    "Seguro de gastos médicos",
    "Oportunidades de crecimiento profesional",
    "Cursos y certificaciones pagadas",
    "Bono anual por desempeño"
  ],
  companyInfo: "TechnoLatino es una empresa líder en desarrollo de software para el mercado latinoamericano. Con más de 10 años de experiencia, nos especializamos en crear soluciones tecnológicas innovadoras para empresas de todos los tamaños. Nuestra misión es impulsar la transformación digital en Latinoamérica a través de productos de alta calidad."
};

// Mock related jobs
const relatedJobs = [
  {
    id: 2,
    title: "Desarrollador Frontend React",
    company: "InteractiveWeb",
    location: "Ciudad de México, México",
    type: "Tiempo Completo",
    category: "Tecnología",
    salary: "$35,000 - $45,000 MXN",
    posted: "Hace 3 días",
    logo: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Desarrollador Backend Node.js",
    company: "ServerSolutions",
    location: "Guadalajara, México",
    type: "Tiempo Completo",
    category: "Tecnología",
    salary: "$38,000 - $50,000 MXN",
    posted: "Hace 1 día",
    logo: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Ingeniero Full Stack",
    company: "GlobalTech",
    location: "Remoto",
    type: "Tiempo Completo",
    category: "Tecnología",
    salary: "$45,000 - $60,000 MXN",
    posted: "Hace 5 días",
    logo: "/placeholder.svg",
  },
];

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you would fetch the job details based on the ID
  // For this demo, we'll just use our mock data
  
  return (
    <Layout>
      <JobDetail job={jobDetails} />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Empleos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JobDetailPage;
