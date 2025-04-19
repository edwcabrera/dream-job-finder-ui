
import Layout from "@/components/layout/Layout";
import AiAssistantForm from "@/components/ai-assistant/AiAssistantForm";

const AiAssistantPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-job-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Asistente IA de Búsqueda de Empleo</h1>
            <p className="text-gray-600">
              Nuestro asistente de inteligencia artificial analizará tu perfil y te recomendará 
              las mejores oportunidades laborales adaptadas a tus habilidades y experiencia.
            </p>
          </div>
          
          <AiAssistantForm />
        </div>
      </div>
    </Layout>
  );
};

export default AiAssistantPage;
